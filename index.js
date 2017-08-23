$().ready(function(){
    		$('#stop_mining').click(function(){
    			$.ajax({
    				type:"GET",
    				url: "/eth_miner/stop_miner.sh",
    			});
    		});
    		$('#start_mining').click(function(){
    			
    			function get_config(){
    				var myconfig=[];
    				var val_eth=$('input:radio[name="ethnum"]:checked').val();
    				var val_dou=$('input:radio[name="double"]:checked').val();

    				if (val_eth == 'eth' ){
    					myconfig.push($('#first_pool').val(), $('#first_wallet').val(), $('#first_password').val()) 
    				}
    				else if (val_eth == 'f2') {
    					myconfig.push($('#second_pool').val(), $('#second_wallet').val(), $('#second_password').val(), $('#second_worker').val())
    				}
    				else if (val_eth == 'nano') {
    					myconfig.push($('#third_pool').val(), $('#third_wallet').val(), $('#third_password').val(), $('#third_worker').val())
    				};

    				if (val_dou == 'decred') {
    					myconfig.push($('#four_pool').val(), $('#four_wallet').val(), $('#four_password').val())
    				}
    				else if (val_dou == 'siacoin') {
    					myconfig.push($('#five_pool').val(), $('#five_wallet').val(), $('#five_password').val())
    				}
    				else if (val_dou == 'lbry') {
    					myconfig.push($('#six_pool').val(), $('#six_wallet').val(), $('#six_password').val())
    				}
    				return myconfig;

    			}
    			$.ajax({
    				type:"GET",
    				url: "/eth_miner/mining.py?config=" + get_config(),
    				dataType: 'json',
    				success:function(data){
    					alert(data);
    				}
    			});
    		});
    		$('#save_config').click(function(){
    			
    			function save_config(){
    				var my_saveconfig = new Array();
    				chkitem=document.forms[1].chkitem;
					for (i=0;i<chkitem.length;++ i){
						if (chkitem[i].checked)
						{
							if(chkitem[i].value == "restart"){
								my_saveconfig.push(chkitem[i].value)
							}
							else{
								my_saveconfig.push($('#username').val(), $('#password').val())
							}
    					}
    				}
    			return my_saveconfig;
    		}
    			$.ajax({
    				type:"GET",
    				url:"/eth_miner/config.py?config=" + save_config(),
    			});
    			
    		});
    	});
