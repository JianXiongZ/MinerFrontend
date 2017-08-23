#!/usr/bin/env python
#encoding: utf-8

import cgi, cgitb
import os

form = cgi.FieldStorage()

value = form.getvalue('config')

PATH = '/home/jianxiong/eth_miner/config.txt'



print("Content-type: text/html\n")




def mining(args):
	fhandler = open(PATH, 'wt')
	if len(args) == 3:
		fhandler.write('-epool ' + args[0] + '\n-ewal ' + args[1] + '\n-epsw ' + args[2] + '\n-mode 1')
	elif len(args) == 4:
		fhandler.write('-epool ' + args[0] + '\n-ewal ' + args[1] + '\n-epsw ' + args[2] + '\n-eworker ' + args[3] +'\n-mode 1')
	elif len(args) == 6:
		fhandler.write('-epool ' + args[0] + '\n-ewal ' + args[1] + '\n-epsw ' + args[2] + '\n-dpool ' + args[3] + '\n-dwal ' + args[4] + '\n-dpasw ' + args[5])
	elif len(args) == 7:
		fhandler.write('-epool ' + args[0] + '\n-ewal ' + args[1] + '\n-epsw ' + args[2] + '\n-eworker ' + args[3] + '\n-dpool ' + args[4] + '\n-dwal ' + args[5] + '\n-dpasw ' + args[6])

	fhandler.close()
	#print(os.system('/home/canaan/eth_miner/ethdcrminer64'))
	


	

mining(value.split(','))#value is list or tuple
