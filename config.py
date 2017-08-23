#!/usr/bin/env python
#encoding: utf-8

import cgi, cgitb

form = cgi.FieldStorage()

config_list = form.getvalue('config')

PATH = '~/eth_miner/config_save.txt'

print("Content-type: text/html\n")


def save_config(value):
	fhandler = open(PATH, 'wt')
	for i in value:
		fhandler.write(i)

	fhandler.close()
	print(1)

save_config(config_list)


