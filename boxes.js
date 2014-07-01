	var bridge = {	name : "Bridge",
					systemID : "bridge",
					points: {	rr:1, //rim raiders
								nv:30,//novans
								au:1,//auregans
								fd:1,//federation
								em:1,//empire
								gh:1,//greater house
								mh:1,//minor house
								gu:1 //guild
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:"" //guild
							},
					imgurl: "icons/bridge.gif",
					available:2,
					isRequired: "<999" //isRequired on ships with MASS<999
					};
	var secondaryBridge = {	name : "Secondary bridge",
					systemID : "secondaryBridge",
					points: {	rr:"", //rim raiders
								nv:2,//novans
								au:2,//auregans
								fd:2,//federation
								em:2,//empire
								gh:2,//greater house
								mh:2,//minor house
								gu:2//guild
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/bridge.gif",
					available:2,
					isRequired: "" 
					};

	var fireControl = {name : "Fire control",
					systemID : "fireControl",
					points: {	rr:2,
								nv:"",
								au:1,
								fd:2,
								em:1,
								gh:1,
								mh:1,
								gu:1
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/firecontrol.gif",
					available:2,
					isRequired: "<100"
					};

	var manouvreDrive = {name : "Manouvre drive",
					systemID : "manouvreDrive",
					points: {	rr:2,
								nv:1,
								au:2,
								fd:1,
								em:1,
								gh:1,
								mh:1,
								gu:1
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/manouvre_drive_front.gif",
					available:99,
					isRequired: "<5"
					};

	var mainDrive = {	name : "Main drive",
					systemID : "mainDrive",
						points: {	rr:2, //rim raiders
								nv:1,//novans
								au:2,//auregans
								fd:2,//federation
								em:2,//empire
								gh:2,//greater house
								mh:2,//minor house
								gu:2//guild
							},
						strength: {	max:4,
								rr:1, //rim raiders
								nv:1,//novans
								au:2,//auregans
								fd:1,//federation
								em:1,//empire
								gh:1,//greater house
								mh:1,//minor house
								gu:1//guild								
							},

					imgurl: "icons/main_drive.gif",
					available:2,
					isRequired: "<999"//isRequired on ships with MASS<999
					};

	var shields = {	name : "Shields",
					systemID : "shields",
					points: {	rr:2, //rim raiders
								nv:1,//novans
								au:0,//auregans
								fd:1,//federation
								em:1,//empire
								gh:1,//greater house
								mh:1,//minor house
								gu:1//guild
							},
					strength: {	max:4,
								rr:1, //rim raiders
								nv:1,//novans
								au:1,//auregans
								fd:1,//federation
								em:1,//empire
								gh:1,//greater house
								mh:1,//minor house
								gu:1//guild								
							},

					imgurl: "icons/shield.gif",
					available:2,
					isRequired: "<999" //isRequired on ships with MASS<999
					};

	var pointDefence = {name : "Point defence",
					systemID : "pointDefence",
					points: {	rr:2,
								nv:3,
								au:1,
								fd:3,
								em:2,
								gh:3,
								mh:2,
								gu:2
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/point_defence.gif",
					available:99,
					isRequired: ""
					};

	var tractor = {name : "Tractor",
					systemID : "tractor",
					points: {	rr:2,
								nv:3,
								au:5,
								fd:3,
								em:4,
								gh:3,
								mh:3,
								gu:3
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/tractor_beam_front.gif",
					available:99,
					isRequired: ""
					};

	var inertialessDrive = {name : "Inertialess drive",
					systemID : "inertialessDrive",
					points: {	rr:"",
								nv:5,
								au:"",
								fd:6,
								em:10,
								gh:10,
								mh:6,
								gu:6
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/inertialess_drive.gif",
					available:99,
					isRequired: ">15" //this is wrong, but fix later
					};

	var fighterBay = {name : "Fighter bay",
					systemID : "fighterBay",
					points: {	rr:5,
								nv:5,
								au:"",
								fd:5,
								em:5,
								gh:5,
								mh:5,
								gu:5
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/fighter_bay.gif",
					available:99,
					isRequired: ">10"
					};

	var beam = {	name : "Beam",
					systemID : "beam",
					points: {	rr:1, //rim raiders
								nv:1,//novans
								au:2,//auregans
								fd:1,//federation
								em:2,//empire
								gh:1,//greater house
								mh:1,//minor house
								gu:1//guild
							},
					strength: {	max:5,
								rr:1, //rim raiders
								nv:1,//novans
								au:1,//auregans
								fd:1,//federation
								em:1,//empire
								gh:1,//greater house
								mh:1,//minor house
								gu:1//guild								
							},

					imgurl: "icons/beam_front.gif",
					available:99,
					isRequired: "" //is not Required
					};

	var dart = {name : "Dart launcher",
					systemID : "dart",
					points: {	rr:"",
								nv:4,
								au:"",
								fd:4,
								em:3,
								gh:4,
								mh:3,
								gu:3
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/dart_front.gif",
					available:99,
					isRequired: ""
					};

	var arrow = {name : "Arrow launcher",
					systemID : "arrow",
					points: {	rr:7, //possibly reduce these values after rules review
								nv:5,
								au:6,
								fd:"",
								em:7,
								gh:"",
								mh:7,
								gu:7
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/arrow_front.gif",
					available:99,
					isRequired: ""
					};

	var bolt = {name : "Bolt launcher",
					systemID : "bolt",
					points: {	rr:7,
								nv:6,
								au:"",
								fd:6,
								em:7,
								gh:6,
								mh:6,
								gu:6
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/bolt_front.gif",
					available:99,
					isRequired: ""
					};

	var drones = {	name : "Drone bay",
					systemID : "drones",
					points: {	rr:5, //rim raiders
								nv:"",//novans
								au:7,//auregans
								fd:"",//federation
								em:6,//empire
								gh:8,//greater house
								mh:8,//minor house
								gu:8//guild
							},
					strength: {	max:999,
								rr:2, //rim raiders
								nv:"",//novans
								au:2,//auregans
								fd:"",//federation
								em:2,//empire
								gh:2,//greater house
								mh:2,//minor house
								gu:2//guild								
							},

					imgurl: "icons/drones.gif",
					available:99,
					isRequired: "" //is not Required
					};

	var coma = {name : "CoMa system",
					systemID : "coma",
					points: {	rr:"",
								nv:22,
								au:20,
								fd:17,
								em:15,
								gh:19,
								mh:17,
								gu:17
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/coma.gif",
					available:99,
					isRequired: ""
					};

	var tachyon = {name : "Tachyon missile launcher",
					systemID : "tachyon",
					points: {	rr:"",
								nv:"",
								au:5,
								fd:"",
								em:"",
								gh:"",
								mh:"",
								gu:""
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/tachyon_front.gif",
					available:99,
					isRequired: ""
					};

	var kennedy = {name : "Kennedy field generator",
					systemID : "kennedy",
					points: {	rr:"",
								nv:"",
								au:"",
								fd:10,
								em:"",
								gh:"",
								mh:"",
								gu:15
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/kennedy_field.gif",
					available:99,
					isRequired: ""
					};

	var faradyne = {name : "Faradyne field generator",
					systemID : "faradyne",
					points: {	rr:70,
								nv:"",
								au:"",
								fd:"",
								em:"",
								gh:"",
								mh:"",
								gu:""
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/faradyne_field.gif",
					available:99,
					isRequired: ""
					};

	var scatterPack = {name : "Scatter pack launcher",
					systemID : "scatterPack",
					points: {	rr:"",
								nv:"",
								au:"",
								fd:12,
								em:"",
								gh:14,
								mh:"",
								gu:""
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/scatter_pack_front.gif",
					available:99,
					isRequired: ""
					};		

	var minelets = {	name : "Minelet dispenser",
					systemID : "minelets",
					points: {	rr:4, //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:5,//federation
								em:7,//empire
								gh:8,//greater house
								mh:"",//minor house
								gu:""//guild
							},
					strength: {	max:999,
								rr:1, //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:2,//federation
								em:1,//empire
								gh:2,//greater house
								mh:"",//minor house
								gu:""//guild								
							},

					imgurl: "icons/minelets.gif",
					available:99,
					isRequired: "" //is not Required
					};								

	var marines = {name : "Marine unit",
					systemID : "marines",
					points: {	rr:10,
								nv:10,
								au:10,
								fd:10,
								em:10,
								gh:10,
								mh:10,
								gu:""
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/marines.gif",
					available:99,
					isRequired: ""
					};

	var photon = {name : "Photon torpedo launcher",
					systemID : "photon",
					points: {	rr:6,
								nv:3,
								au:"",
								fd:4,
								em:5,
								gh:5,
								mh:6,
								gu:6
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/photon_front.gif",
					available:99,
					isRequired: ""
					};

	var mirage = {name : "Mirage generator",
					systemID : "mirage",
					points: {	rr:"",
								nv:"",
								au:"",
								fd:10,
								em:15,
								gh:20,
								mh:18,
								gu:18
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/mirage_generator.gif",
					available:99,
					isRequired: ""
					};

	var probe = {name : "Probe",
					systemID : "probe",
					points: {	rr:10,
								nv:8,
								au:"",
								fd:10,
								em:10,
								gh:15,
								mh:15,
								gu:15
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/probe.gif",
					available:99,
					isRequired: ""
					};

	var hull = {name : "Extra Hull",
					systemID : "hull",
					points: {	rr:0,
								nv:0,
								au:0,
								fd:0,
								em:0,
								gh:0,
								mh:0,
								gu:1
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/hull.gif",
					available:99,
					isRequired: ""
					};

	var cleverMetal = {name : "Clever Metal",
					systemID : "cleverMetal",
					points: {	rr:"",
								nv:1,
								au:"",
								fd:2,
								em:2,
								gh:"",
								mh:"",
								gu:2
							},
					strength: {	max:0,
								rr:"", //rim raiders
								nv:"",//novans
								au:"",//auregans
								fd:"",//federation
								em:"",//empire
								gh:"",//greater house
								mh:"",//minor house
								gu:""//guild
							},
					imgurl: "icons/clever_metal.gif",
					available:99,
					isRequired: ""
					};

var boxes = [bridge,fireControl,mainDrive,manouvreDrive,shields,
				pointDefence,tractor,inertialessDrive,fighterBay,
				beam,dart,arrow,bolt,drones,coma,tachyon,kennedy,
				faradyne,scatterPack,minelets,marines,photon,
				mirage,probe,hull,cleverMetal];

/* set default race so that values are displayed on startup */
var race="em";


/* this checks for changes in the race dropdown and passes the race code to the global variable 'race' */
$('#raceSelect').change(function() {
	//console.log("we have arrived");
    window.race = $('#raceSelect :selected').val();
    //console.log(race);
    makeMenu(race);
    });
	

var $ul=$("#selectorpane ul"); //speed up code for multiple writes
var $blockLoc=$("#canvaspane");
var $hull=$('<img>',{src: hull.imgurl}).clone(true);
/* makeMenu does a clearup on anything already displayed, then calls the constructor for the menu */
function makeMenu(){
	$($ul).html("");
	boxes.forEach (buildMenu);
	};

function buildMenu (ob) {
	var racePoints=ob.points[race];
	var raceStrength=ob.strength[race];
	var hideflag=false;
	if (racePoints===""){return(hideflag=true)}
			else {	if (raceStrength!=="") {ptstr = racePoints + "/" + raceStrength} 
						else {ptstr = racePoints}
			};

	/* this builds the individual systems from the objects above */
	var displayit = ob.name + " Points " + ptstr;
	if (hideflag==false) {
						var $oi=$('<img>',{src: ob.imgurl});
						var para = $('<li>',{text: displayit})
						.appendTo($ul)
						.prepend($oi)
						.addClass(ob.systemID);
						
						$(para).click(function(){
								console.log("addblock "+ ob.systemID);
								$($oi.clone()).appendTo($blockLoc);
								if (ob!=="hull"){$($hull.clone()).appendTo($blockLoc);}
								ship.mass +=1;
								ship
							})
						} 
						else {return};
	
};

/* build stats block */
var ship = {
	name : "U.S.S. Default",
	points: 0,
	mass : 1, //for reactor/hull starting
	acdc : 0,
	turns: 0,
	shields : 0,
	pointDefence : 0,
	weapons : {
		beam : 0,
		dart : 0,
		arrow: 0,
		bolt : 0,
		photon : 0,
		scatterPack : 0,
		tachyon : 0,
		COMA : 0,		
		drones : 0,
		minelets : 0
		},
	fighters : 0,
	marines : 0
};

function addBlock () {
	
}
