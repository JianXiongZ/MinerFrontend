$().ready(function(){
    		$('#stop_mining').click(function(){
    			$.ajax({
    				type:"GET",
    				url: "/eth_miner/stop_miner.sh",
    			});
    		});
    		$('#start_mining').click(function(){
    			$("#error").text("");
    			function get_config(){
    				var myconfig=[];
    				var val_eth=$('input:radio[name="pool-sel"]:checked').val();
    				var val_dou=$('input:radio[name="pool-sel2"]:checked').val();
    				if (val_eth == 'eth' ){
    					myconfig.push($('#pool-cfg-poolurl').val(), $('#pool-cfg-workername').val(), $('#pool-cfg-passwd').val())
    				}
    				else if (val_eth == 'f2' || val_eth == 'nano') {
                        myconfig.push($('#pool-cfg-poolurl').val(), $('#pool-cfg-workername').val(), $('#pool-cfg-passwd').val(), $('#pool-cfg-wallet').val())
    				}
    				if (val_dou == 'decred' || val_dou == 'siacoin' || val_dou == 'lbry') {
    					myconfig.push($('#poold-cfg-poolurl').val(), $('#poold-cfg-workername').val(), $('#poold-cfg-passwd').val(),$('#poold-cfg-wallet').val())
    				}
    				return myconfig;
    			}
    			$.ajax({
    				type:"GET",
    				url: "/eth_miner/mining.py?config=" + get_config(),
    				dataType: 'json',
    				success:function(data){

    					if (data == "non_input") {
    						$("#error").text("Please input wallet or password or worker!");
    					}

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
								my_saveconfig.push($('#pool-cfg-uname').val(), $('#pool-cfg-pwd').val())
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
    		$('#pool-sel-ethpool').click(function () {
                document.getElementById('pool-cfg-poolurl').value='usl.ethpool.org:3333';
            });
    		$('#pool-sel-f2pool').click(function () {
                document.getElementById('pool-cfg-poolurl').value='eth.f2pool.com:8008';
            });
			$('#pool-sel-nanopool').click(function () {
                document.getElementById('pool-cfg-poolurl').value='eul.nanopool.org:9999';
			});
			$("#dualmine-checkbox").click(function(){
                var _check = $(this).is(':checked');
				if(_check){
                    $("#double_main").show();
                }else{
                    $("#double_main").hide();
                }
			});
			$("#pool-sel-choose").click(function(){
				var _check = $(this).is(':checked');
				if(_check){
					$("#pool-sel-login").show();
				}else{
					$("#pool-sel-login").hide();
				}
			});
		$('#poold-sel-decred').click(function () {
            $("#poold-cfg-poolurl").focus();
            $('#poold-cfg-poolurl').val('stratum+tcp://yiimp.ccminer.org:3252').attr('disabled','true');

		});
		$('#poold-sel-siacoin').click(function () {
            $("#poold-cfg-poolurl").focus();
            $('#poold-cfg-poolurl').val('stratum+tcp://hub.miningpoolhub.com:20550').attr('disabled','true');
		});
		$('#poold-sel-lbry').click(function () {
            $("#poold-cfg-poolurl").focus();
            $('#poold-cfg-poolurl').val('stratum+tcp://lbry.suprnova.cc:6256').attr('disabled','true');
		});
		$('#poold-sel-custom').click(function () {
            $("#poold-cfg-poolurl").focus();
            $('#poold-cfg-poolurl').val('').removeAttr('disabled');
		});
  	});
