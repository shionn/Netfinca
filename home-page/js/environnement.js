$(function() {
	// var vm = "XMT13VM008"; // changé le 15/05/2017
	var vm = "A0013";
	var environements = [
			{
				name : "Locale",
				tools : [
						{
							name : "CAR All",
							link : "http://"
									+ vm
									+ ".CA-TITRES.FR:8080/netfinca-bam/servlet/com.netfinca.frontcr.login.SimulatorCARALL"
						},
						{
							name : "Bcap",
							link : "http://"
									+ vm
									+ ".CA-TITRES.FR:8080/netfinca-bam/servlet/com.netfinca.frontcr.login.SimulatorClassicalTDCBCAP"
						},
						{
							name : "AXA",
							link : "http://"
									+ vm
									+ ".CA-TITRES.FR:8080/netfinca-bam/servlet/com.netfinca.frontcr.login.SimulatorClassicalTDCAXA"
						},
						{
							name : "Netfinca Titres (login)",
							link : "http://"
									+ vm
									+ ".CA-TITRES.FR:8080/netfinca-titres/LoginInveststore",
							popover : 'coop : 095DEMO/TEST'
						},
						{
							name : "Portail Intranet",
							link : "http://" + vm
									+ ".CA-TITRES.FR:8080/portail-intranet"
						},
						{
							name : "Démo investstore intégrale",
							link : "http://" + vm
									+ ".CA-TITRES.FR:8080/prospect-portal/"
						},
						{
							name : "Middle-882ATCR",
							link : "http://"
									+ vm
									+ ".CA-TITRES.FR:8080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?"
									+ "USER_ID=882ATCR882&ENTITY_ID=882&accountNumber=2&CHANNEL=G"
									+ "&IDCNT1=60115114053"
									+ "&IDCNT2=09981502678",
							popover : "ENP (bloc)"
						},
						{
							name : "Middle-882SGE",
							link : "http://"
									+ vm
									+ ".CA-TITRES.FR:8080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?"
									+ "USER_ID=882SGEPUCC1&ENTITY_ID=882&accountNumber=5&CHANNEL=G"
									+ "&IDCNT1=60115114053&IDCNT2=78939743601&IDCNT3=28214321601"
									+ "&IDCNT4=33822967601&IDCNT5=35508430601",
							popover : "ENP (bloc)"
						},
						{
							name : "Middle 881 ATCR",
							link : "http://"
									+ vm
									+ ":8080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?USER_ID=881ATCR881&ENTITY_ID=881&accountNumber=1&IDCNT1=96727651850"
						},
						{
							name : "Middle-370SGEPUCC1",
							link : "http://"
									+ vm
									+ ".CA-TITRES.FR:8080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?USER_ID=370SGEPUCC1&ENTITY_ID=370"
									+ "&accountNumber=4&IDCNT1=00000000001&IDCNT2=08660470001&IDCNT3=20106140100"
									+ "&IDCNT4=72432141065"
						},
						{
							name : "Middle-553",
							link : "http://"
									+ vm
									+ ".CA-TITRES.FR:8080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?"
									+ "USER_ID=553SGE&ENTITY_ID=553&accountNumber=2"
									+ "&IDCNT1=95301003501"
									+ "&IDCNT2=95301003491"
						},
						{
							name : "Middle-BFB",
							link : "http://"
									+ vm
									+ ".CA-TITRES.FR:8080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle"
									+ "?USER_ID=794SGEPUCC1&ENTITY_ID=794&accountNumber=5&CHANNEL=G"
									+ "&IDCNT1=20200066152&IDCNT2=20100056510&IDCNT3=20200060857&IDCNT4=20200061002"
									+ "&IDCNT5=20100058137",
							popover : '794 !'
						},
						{
							name : "Middle-axa",
							link : "http://"
									+ vm
									+ ".CA-TITRES.FR:8080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?USER_ID=951ATCR951&ENTITY_ID=951&accountNumber=3&CHANNEL=G"
									+ "&IDCNT1=43999961515&IDCNT2=43999961505&IDCNT3=15002621505",
							popover : '951 !'
						},
						{
							name : "Middle-Bcap",
							link : "http://"
									+ vm
									+ ".CA-TITRES.FR:8080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle"
									+ "?USER_ID=952ATCR952&ENTITY_ID=952&accountNumber=3&CHANNEL=G"
									+ "&IDCNT1=00000002168&IDCNT2=00000150210&IDCNT3=00000152298",
							popover : '952 !'
						},
						{
							name : "LCL Agence",
							link : "http://"
									+ vm
									+ ".CA-TITRES.FR:8080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?"
									+ "USER_ID=949REMYSIE&ENTITY_ID=949&accountNumber=2"
									+ "&IDCNT1=02831500701&IDCNT2=00155019573"
									+ "&CPFIP=8&CAPFA1=08500P43",
							popover : "949"
						},
						{
							name : "Oudart",
							link : "http://"
									+ vm
									+ ".CA-TITRES.FR:8080/netfinca-titres/LoginOudart"
						},
						{
							name : "Jmx EBO",
							link : "http://" + vm + ".CA-TITRES.FR:8090/"
						},
						{
							name : "Banque de France",
							link : "http://"
									+ vm
									+ ".ca-titres.fr:8080/netfinca-titres/LoginBDF",
							popover : '320RECETTENET / BOURDEL%'
						},
						{
							name : "BGPI",
							link : "http://"
									+ vm
									+ ".ca-titres.fr:8080/netfinca-titres/LoginInveststore",
							popover : "352TEST / AAAAAAA!"
						},
						{
							name : "NemoNet",
							link : "http://"
									+ vm
									+ ".ca-titres.fr:9080/pages/index_init.html"
						},
						{
							name : "WsExAntFeeWebClient",
							link : "http://localhost:8080/ws-ex-ante-fees-web-client/"
						},
						{
							name : "DebugInfo",
							link : "http://a0013.ca-titres.fr:8080/netfinca-titres/servlet/com.netfinca.frontcr.profil.DebugInfo"
						} ]
			},
			{
				name : "DEV 1",
				tools : [
						{
							name : "CAR All",
							link : "https://wwwdev1.cabourse.credit-agricole.fr/netfinca-bam/servlet/com.netfinca.frontcr.login.SimulatorCARALL"
						},
						{
							name : "Bcap",
							link : 'https://wwwdev1.cabourse.credit-agricole.fr/netfinca-bam/servlet/com.netfinca.frontcr.login.SimulatorClassicalTDCBCAP'
						},
						{
							name : "Netfinca Titres (login)",
							link : "https://wwwdev1.cabourse.credit-agricole.fr/netfinca-titres/LoginInveststore",
							popover : 'coop : 095DEMO/TEST'
						},
						{
							name : "AXA",
							link : "https://wwwdev1.cabourse.credit-agricole.fr/netfinca-bam/servlet/com.netfinca.frontcr.login.SimulatorClassicalTDCAXA"
						},
						{
							name : "Middle-882ATCR",
							link : "http://ld102wta0101f.distrib.ca-titres.gca:55080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?"
									+ "USER_ID=882ATCR882&ENTITY_ID=882&accountNumber=2&CHANNEL=G"
									+ "&IDCNT1=60115114053"
									+ "&IDCNT2=09981502678"
						},
						{
							name : "Middle-882SGE",
							link : "http://ld102wta0101f.distrib.ca-titres.gca:55080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?"
									+ "USER_ID=882SGEPUCC1&ENTITY_ID=882&accountNumber=5&CHANNEL=G"
									+ "&IDCNT1=60115114053&IDCNT2=78939743601&IDCNT3=28214321601"
									+ "&IDCNT4=33822967601&IDCNT5=35508430601",
							popover : "ENP (bloc)"
						},
						{
							name : "Middle-370SGEPUCC1",
							link : "http://ld102wta0101f.distrib.ca-titres.gca:55080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?USER_ID=370SGEPUCC1&ENTITY_ID=370&accountNumber=3&IDCNT1=00000000001&IDCNT2=08660470001&IDCNT3=20106140100"
						},
						{
							name : "Middle-axa",
							link : "http://ld102wta0101f.distrib.ca-titres.gca:55080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle"
									+ "?USER_ID=951ATCR951&ENTITY_ID=951&accountNumber=3&CHANNEL=G"
									+ "&IDCNT1=43999961515&IDCNT2=43999961505&IDCNT3=15002621505",
							popover : '951 !'
						},
						{
							name : "Middle-BFB",
							link : "http://ld102wta0101f.distrib.ca-titres.gca:55080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle"
									+ "?USER_ID=794SGEPUCC1&ENTITY_ID=794&accountNumber=5&CHANNEL=G"
									+ "&IDCNT1=20200066152&IDCNT2=20100056510&IDCNT3=20200060857&IDCNT4=20200061002"
									+ "&IDCNT5=20100058137",
							popover : '794 !'
						},
						{
							name : "Simulateur Fix",
							link : "http://ld102quo0101f.distrib.ca-titres.gca:8080/fixsimulator/"
						},
						{
							name : "Intranet",
							link : "https://client-table.dev1.ca-titres.fr/"
						},
						{
							name : "Nemo",
							link : "http://nemonet-web.dev1.ca-titres.fr/pages/index_init.html",
							popover : 'tomcat / nemonet'
						},
						{
							name : "Mobile-app CRCA",
							link : "https://crca-mobile.dev1.ca-titres.fr/mobile-app-tdc/#/login"
						},
						{
							name : "Mobile-app-i3 CRCA",
							link : "https://crca-mobile.dev1.ca-titres.fr/mobile-app-ionic3/#/login-tdc"
						},
						{
							name : "DebugInfo",
							link : "http://ld102wta0101f.distrib.ca-titres.gca:55080/netfinca-titres/servlet/com.netfinca.frontcr.profil.DebugInfo"
						}, {
							name : "Nemo",
							link : "https://dev1-lanceur-sidi.ca-titres.fr/",
							popover : 'tomcat / tomcat'

						} ]
			},
			{
				name : "DEV 2",
				tools : [
						{
							name : "CAR All",
							link : "https://wwwdev2.cabourse.credit-agricole.fr/netfinca-bam/servlet/com.netfinca.frontcr.login.SimulatorCARALL"
						},
						{
							name : "Netfinca Titres (login)",
							link : "https://wwwdev2.cabourse.credit-agricole.fr/netfinca-titres/LoginInveststore",
							popover : 'coop : 095DEMO/TEST'
						},
						{
							name : "879SGEPUCC1 Preprod",
							link : "http://ld102wta0102f.distrib.ca-titres.gca:55080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?ENTITY_ID=879&accountNumber=6&IDCNT6=03938778600&USER_ID=879SGEPUCC1&IDCNT1=02052571600&IDCNT5=12053023600&IDCNT4=04035003670&IDCNT3=06315933600&IDCNT2=03238644672"
						},
						{
							name : "879AGTPUCC1 PreProd",
							link : "http://ld102wta0102f.distrib.ca-titres.gca:55080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?ENTITY_ID=879&accountNumber=6&IDCNT6=03938778600&USER_ID=879AGTPUCC1&IDCNT1=02052571600&IDCNT5=12053023600&IDCNT4=04035003670&IDCNT3=06315933600&IDCNT2=03238644672"
						},
						{
							name : "Middle 879 su-PreProd",
							link : "http://ld102wta0102f.distrib.ca-titres.gca:55080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?ENTITY_ID=879&accountNumber=6&IDCNT6=03938778600&USER_ID=SCTPRES13&IDCNT1=02052571600&IDCNT5=12053023600&IDCNT4=04035003670&IDCNT3=06315933600&IDCNT2=03238644672"
						},
						{
							name : "Middle-370SGEPUCC1",
							link : "http://ld102wta0102f.distrib.ca-titres.gca:55080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?USER_ID=370SGEPUCC1&ENTITY_ID=370&accountNumber=3&IDCNT1=00000000001&IDCNT2=08660470001&IDCNT3=20106140100"
						},
						{
							name : "Simulateur Fix",
							link : "http://ld102quo0102f.distrib.ca-titres.gca:8080/fixsimulator/"
						},
						{
							name : "Intranet",
							link : "https://client-table.dev2.ca-titres.fr/"
						},
						{
							name : "Nemo",
							link : "http://dev2.nemonet.interne.ca-titres.fr:8081/pages/index_init.html",
							popover : 'tomcat / nemonet'
						},
						{
							name : "Mobile-app CRCA",
							link : "https://crca-mobile.dev2.ca-titres.fr/mobile-app-tdc/#/login"
						} ]
			},
			{
				name : "DEV 3",
				tools : [
						{
							name : "CAR All",
							link : "https://wwwdev3.cabourse.credit-agricole.fr/netfinca-bam/servlet/com.netfinca.frontcr.login.SimulatorCARALL"
						},
						{
							name : "Bcap",
							link : 'https://wwwdev3.cabourse.credit-agricole.fr/netfinca-bam/servlet/com.netfinca.frontcr.login.SimulatorClassicalTDCBCAP'
						},
						{
							name : "879SGEPUCC1 Preprod",
							link : "http://ld102wta0103f.distrib.ca-titres.gca:55080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?ENTITY_ID=879&accountNumber=6&IDCNT6=03938778600&USER_ID=879SGEPUCC1&IDCNT1=02052571600&IDCNT5=12053023600&IDCNT4=04035003670&IDCNT3=06315933600&IDCNT2=03238644672"
						},
						{
							name : "879AGTPUCC1 PreProd",
							link : "http://ld102wta0103f.distrib.ca-titres.gca:55080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?ENTITY_ID=879&accountNumber=6&IDCNT6=03938778600&USER_ID=879AGTPUCC1&IDCNT1=02052571600&IDCNT5=12053023600&IDCNT4=04035003670&IDCNT3=06315933600&IDCNT2=03238644672"
						},
						{
							name : "Middle 879 su-PreProd",
							link : "http://ld102wta0103f.distrib.ca-titres.gca:55080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?ENTITY_ID=879&accountNumber=6&IDCNT6=03938778600&USER_ID=SCTPRES13&IDCNT1=02052571600&IDCNT5=12053023600&IDCNT4=04035003670&IDCNT3=06315933600&IDCNT2=03238644672"
						},
						{
							name : "Middle-839ATCR",
							link : "http://ld102wta0103f.distrib.ca-titres.gca:55080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?"
									+ "USER_ID=839ATCR839&ENTITY_ID=839&accountNumber=5&CHANNEL=G&"
									+ "IDCNT1=85011996111&IDCNT2=60662638600&IDCNT3=15659186600&IDCNT4=12044547600&IDCNT5=85005471805"
						},
						{
							name : "Middle 881 ATCR",
							link : "http://ld102wta0103f.distrib.ca-titres.gca:55080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?USER_ID=881ATCR881&ENTITY_ID=881&accountNumber=1&IDCNT1=96727651850"
						},
						{
							name : "Middle-370SGEPUCC1",
							link : "http://ld102wta0103f.distrib.ca-titres.gca:55080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?USER_ID=370SGEPUCC1&ENTITY_ID=370&accountNumber=3&IDCNT1=00000000001&IDCNT2=08660470001&IDCNT3=20106140100"
						},
						{
							name : "Simulateur Fix",
							link : "http://ld102quo0103f.distrib.ca-titres.gca:8080/fixsimulator/"
						},
						{
							name : "Intranet",
							link : "https://client-table.dev3.ca-titres.fr/"
						},
						{
							name : "Nemo",
							link : "http://dev3.nemonet.interne.ca-titres.fr:8081/pages/index_init.html",
							popover : 'tomcat / nemonet'
						},
						{
							name : "Banque de France",
							link : "https://wwwdev3.cabourse.credit-agricole.fr/netfinca-titres/LoginBDF",
							popover : '320RECETTENET / BOURDEL%'
						},
						{
							name : "ActiveMQ Admin",
							link : "https://ld102app0103f.distrib.ca-titres.gca:8443/admin"
						},
						{
							name : "LCL Agence",
							link : "http://ld102wta0103f.distrib.ca-titres.gca:55080/netfinca-bam/servlet/com.netfinca.frontcr.login.LauncherMiddle?"
									+ "USER_ID=949REMYSIE&ENTITY_ID=949&accountNumber=1&IDCNT1=02831500701&CPFIP=8&CAPFA1=08500P43"
						} ]
			},
			{
				name : "Recette",
				tools : [
						{
							name : "CRCA",
							link : "https://wwwrec.cabourse.credit-agricole.fr/netfinca-bam/Templates/simulator/SimulatorCARCRCA.jsp",
							popover : 'tomcat / TOM4RCT!'
						},
						{
							name : "CarAll",
							link : "https://wwwrec.cabourse.credit-agricole.fr/netfinca-bam/servlet/com.netfinca.frontcr.login.SimulatorCARALL"
						},
						{
							name : "Bcap",
							link : "https://wwwrec.cabourse.credit-agricole.fr/netfinca-bam/servlet/com.netfinca.frontcr.login.SimulatorClassicalTDCBCAP"
						},
						{
							name : "Mobile APP BFB",
							link : "https://rct-bfb-bffmobile.ca-titres.fr/client-mobile-ws"
						},
						{
							name : "Middle",
							link : "http://rct-nemonet.ca-titres.ic04.credit-agricole.fr/pages/index.html"
						} ]
			},
			{
				name : "Maintenance",
				tools : [
						{
							name : "CRCA",
							link : "https://wwwmai.cabourse.credit-agricole.fr/netfinca-bam/Templates/simulator/SimulatorCARCRCA.jsp",
							popover : 'tomcat / 15_TOM4MNT!'
						},
						{
							name : "LCL",
							link : "https://wwwmai.cabourse.credit-agricole.fr/netfinca-bam/Templates/simulator/SimulatorCARLCL.jsp",
							popover : 'tomcat / 15_TOM4MNT!'
						} ]
			}, {
				name : "All",
				tools : [ {
					name : "Lanceur DEM",
					link : "http://10.105.136.65:54080/"
				} ]

			} ];

	$(Mustache.render($("[role=environement-template]").html(), environements))
			.appendTo("[role=environement]");
	$('[data-toggle="popover"]').popover({
		trigger : 'hover',
		html : true
	});
});