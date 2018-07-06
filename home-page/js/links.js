$(function() {
  var vm = "XMT13VM008";
  $(Mustache.render($("[role=menu-template]").html(), [ {
    name : 'Administratif',
    links : [ {
      name : 'ADP',
      link : 'https://hr-services.fr.adp.com/'
    }, {
      name : 'Previa',
      link : 'https://cppm3052.ondemand.ca.com/niku'
    }, {
      name : 'Imprimante',
      link : 'http://10.109.9.11'
    }, {
      name :"Affectation",
      link : "https://docs.google.com/spreadsheets/d/1j--B4uJVpI-PQpgA9ZqVu-dK_mXCxZdycxr2ytG8X6Y/edit?usp=sharing&authkey=CJTvmYkJ"
    } ]
  }, {
    name : 'Outil',
    links : [ {
      name : 'Jira',
      link : 'https://ld102tod0101f.distrib.ca-titres.gca:5443/jira/secure/Dashboard.jspa'
    }, {
      name : 'CestDelaShie',
      link : 'https://mnemosyne.ca-titres.fr/CAisd/pdmweb.exe'
    }, {
      name : 'Kepkins',
      link : 'https://ld102tod0101f.distrib.ca-titres.gca:5543/'
    }, {
      name : 'Jenkins Run',
      link : 'https://ld102tod0101f.distrib.ca-titres.gca:6663/jenkins/'
    }, {
      name : 'Jenkins Labs',
      link : 'https://ld102tod0101f.distrib.ca-titres.gca:6443/jenkinsmove/view/Kepkins/'
    }, {
      name : 'Jenkins Mobile',
      link : 'https://ld102tod0101f.distrib.ca-titres.gca:4443/jenkinsmobile/'
    }, {
      name : 'Jenkins Dem',
      link : 'https://ld102tod0101f.distrib.ca-titres.gca:7443/jenkins/'
    }, {
      name : 'Nexus',
      link : 'https://ld102tod0101f.distrib.ca-titres.gca:8444/nexus/index.html'
    }, {
      name : 'Sonar',
      link : 'http://ld102tod0101f.distrib.ca-titres.gca:9000/'
    }, {
      name : 'Sonar DEM',
      link : 'http://ld102tod0101f.distrib.ca-titres.gca:9001/'
    },{
      name : 'Git',
      link :'https://ld102tod0101f.distrib.ca-titres.gca:56443/gitbucket/CAT/labs'
    }, {
      name : 'nexus',
      link : 'https://ld102tod0101f.distrib.ca-titres.gca:8444/nexus/index.html'
    } ]
  }, {
    name : "Flush",
    links : [ {
      name : "Portfolio",
      link : "http://" + vm + ".distrib.ca-titres.gca:23007" + "/jolokia/exec/cache:mbean=PORTFOLIOS/flush()"
    } ]
  }, {
    name: "Flush Dev 1",
    links : [ {
      name : "Portfolio",
      link : "https://ld102bat0101f.distrib.ca-titres.gca:21443/hawtio/proxy/https://ld102app0101f.distrib.ca-titres.gca:23007/jolokia/exec/cache:mbean=PORTFOLIOS/flush()"
    } ]
  }, {
    name : 'Documentation',
    links : [ {
      name : 'SGBD Dev1',
      link : 'https://ld102wta0101f.distrib.ca-titres.gca:55443/schemas-new/'
    }, {
      name : 'SGBD Dev2',
      link : 'https://ld102wta0102f.distrib.ca-titres.gca:55443/schemas-new/'
    }, {
      name : 'Page des liens',
      link : 'https://ld102tod0101f.distrib.ca-titres.gca:5643/display/EVOEC/PagedesLiens+-+URLs'
    }, {
      name : 'Confluence',
      link : 'https://ld102tod0101f.distrib.ca-titres.gca:5643/'
    }, {
      name : "Confluence AppliMob",
      link : "https://ld102tod0101f.distrib.ca-titres.gca:5643/display/WD/Wiki+Appli+Mobile+DEF"
    }, {
      name : 'Wiki DEM',
      link : 'https://www.portail-osmose.ca-titres.fr/Coop/wikidem/Pages/Home.aspx'
    }, {
      name : 'JMXJolokiaHawtio',
      link : 'https://www.portail-osmose.ca-titres.fr/Coop/WikiDEV/Pages/AdministrationJMXJolokiaHawtio.aspx'
    }, {
      name : 'Boot Strap',
      link : 'http://getbootstrap.com/components/'
    }, {
      name :'Css Generator',
      link : 'https://ld102wta0101f.distrib.ca-titres.gca:55443/site/cssgenerator/cssgenerator/'
    }, {
      name : "JQuery",
      link : "http://api.jquery.com/"
    }, {
      name : "Gdoc",
      link : "https://www.portail-osmose.ca-titres.fr/docs/portail"
    }, {
      name : "composant ionic 3",
      link : "https://ionicframework.com/docs//components/#card-background"
    }, {
      name: "Ninja Angular",
      link : "file:///X:/A_garder/ebooks/Become_a_Ninja_with_Angular/Francais/Deviens_un_Ninja_avec_Angular.html"
    }, {
      name: "Flex Css",
      link : "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
    } ]
  }, {
    name : 'Detente',
    links : [ {
      name : 'Youtube',
      link : 'https://www.youtube.com/'
    }, {
      name : 'Les Joies du code',
      link : 'http://lesjoiesducode.fr/'
    }, {
      name : 'Commit Strip',
      link : 'http://www.commitstrip.com/fr/'
    }, {
      name : 'MtgDb',
      link : 'http://mtg.shionn.org'
    }, {
      name : 'MtgGoldFish',
      link : 'http://www.mtggoldfish.com/'
    }, {
      name : 'CE',
      link : 'http://intranet-ce.ca-titres.fr/'
    } ]
  } ])).appendTo("#menu-bar");
});


$(function() {
//  document.addEventListener("keydown",function(e){
//    console.log(e.keyCode);
//  },false);
//  $(document).on("keydown", function(e){
//    console.log(e.keyCode);
//    return false;
//  });
});