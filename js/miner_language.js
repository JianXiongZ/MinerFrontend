$().ready(function(){
  $('#english').click(function () {
        $('#start_mining').html('Save&Mining');
	$('#stop_mining').html('Stop Mining');
	$('#poolurl').html('Pool');
	$('#poolwallet').html('Wallet');
	$('#poolpasswd').html('Password');
	$('#poolworker').html('Miner name');
	$('#double-mining').html('Double Mining');
	$('#yourcustom').html('Customize');
	$('#pooldurl').html('Pool');
	$('#pooldwallet').html('Wallet');
	$('#pooldpasswd').html('Password');
	$('#help').html('Help');
	$('#start_config').html('Start Config');
	$('#restart_mining').html('Boot&Start Mining');
	$('#access_other').html('Allow other hosts to access');
	$('#yourname').html('Plase enter your username');
	$('#yourpasswd').html('Please enter your password');
	$('#save_config').val('Submit');
	$('#status').html('Status:');
	var status=$("#mining_status").text();
	if (status == "正在挖矿"){
		$("#mining_status").text('Now Mining');
	}
	else if(status == "停止挖矿"){
		$("#mining_status").text("Stop Mining");
	}

    });
  $('#chinese').click(function () {
        $('#start_mining').html('保存配置并开始挖矿');
        $('#stop_mining').html('停止挖矿');
        $('#poolurl').html('矿池地址');
        $('#poolwallet').html('钱包');
        $('#poolpasswd').html('密码');
        $('#poolworker').html('矿工名称');
        $('#double-mining').html('双挖');
        $('#yourcustom').html('自定义');
        $('#pooldurl').html('矿池地址');
        $('#pooldwallet').html('钱包');
        $('#pooldpasswd').html('密码');
        $('#help').html('帮助');
        $('#start_config').html('开始配置');
        $('#restart_mining').html('重启自动挖矿');
        $('#access_other').html('允许其他主机访问');
        $('#yourname').html('请输入您的用户名');
        $('#yourpasswd').html('请输入您的密码');
        $('#save_config').val('提交');
	$('#status').html('挖矿状态:')
	var status=$("#mining_status").text();
        if (status == "Now Mining"){
                $("#mining_status").text('正在挖矿');
        }
        else if(status == "Stop Mining"){
                $("#mining_status").text("停止挖矿");
        }

    });
});
