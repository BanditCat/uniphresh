$ = function( el ){ return document.getElementById( el ) };

var renderer = {
    numChars: 0,
    chars: {},
    lowestBaseline: -1000,
    //charString: "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯ˂˃˄˅˒˓˔˕˖˗˘˙˚˛˜˝˞˟˪˫˭˯˰˱˲˳˴˵˶˷˸˹˺˻˼˽˾˿ͰͱͲͳ͵Ͷͷͻͼͽ;Ϳ΄΅Ά·ΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨϩϪϫϬϭϮϯϰϱϲϳϴϵ϶ϷϸϹϺϻϼϽϾϿЀЁЂЃЄЅІЇЈЉЊЋЌЍЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяѐёђѓєѕіїјљњћќѝўџѠѡѢѣѤѥѦѧѨѩѪѫѬѭѮѯѰѱѲѳѴѵѶѷѸѹѺѻѼѽѾѿҀҁ҂ҊҋҌҍҎҏҐґҒғҔҕҖҗҘҙҚқҜҝҞҟҠҡҢңҤҥҦҧҨҩҪҫҬҭҮүҰұҲҳҴҵҶҷҸҹҺһҼҽҾҿӀӁӂӃӄӅӆӇӈӉӊӋӌӍӎӏӐӑӒӓӔӕӖӗӘәӚӛӜӝӞӟӠӡӢӣӤӥӦӧӨөӪӫӬӭӮӯӰӱӲӳӴӵӶӷӸӹӺӻӼӽӾӿԀԁԂԃԄԅԆԇԈԉԊԋԌԍԎԏԐԑԒԓԔԕԖԗԘԙԚԛԜԝԞԟԠԡԢԣԤԥԦԧԨԩԪԫԬԭԮԯԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖ՚՛՜՝՞՟աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆև։֊֍֎֏؆؇؉؊،؎؏٠١٢٣٤٥٦٧٨٩٪٫٬۞۩۰۱۲۳۴۵۶۷۸۹ᴀᴁᴂᴃᴄᴅᴆᴇᴈᴉᴊᴋᴌᴍᴎᴏᴐᴑᴒᴓᴔᴕᴖᴗᴘᴙᴚᴛᴜᴝᴞᴟᴠᴡᴢᴣᴤᴥᴦᴧᴨᴩᴪᴫᵫᵬᵭᵮᵯᵰᵱᵲᵳᵴᵵᵶᵷᵹᵺᵻᵼᵽᵾᵿᶀᶁᶂᶃᶄᶅᶆᶇᶈᶉᶊᶋᶌᶍᶎᶏᶐᶑᶒᶓᶔᶕᶖᶗᶘᶙᶚḀḁḂḃḄḅḆḇḈḉḊḋḌḍḎḏḐḑḒḓḔḕḖḗḘḙḚḛḜḝḞḟḠḡḢḣḤḥḦḧḨḩḪḫḬḭḮḯḰḱḲḳḴḵḶḷḸḹḺḻḼḽḾḿṀṁṂṃṄṅṆṇṈṉṊṋṌṍṎṏṐṑṒṓṔṕṖṗṘṙṚṛṜṝṞṟṠṡṢṣṤṥṦṧṨṩṪṫṬṭṮṯṰṱṲṳṴṵṶṷṸṹṺṻṼṽṾṿẀẁẂẃẄẅẆẇẈẉẊẋẌẍẎẏẐẑẒẓẔẕẖẗẘẙẚẛẜẝẞẟẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼẽẾếỀềỂểỄễỆệỈỉỊịỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợỤụỦủỨứỪừỬửỮữỰựỲỳỴỵỶỷỸỹỺỻỼỽỾỿἀἁἂἃἄἅἆἇἈἉἊἋἌἍἎἏἐἑἒἓἔἕἘἙἚἛἜἝἠἡἢἣἤἥἦἧἨἩἪἫἬἭἮἯἰἱἲἳἴἵἶἷἸἹἺἻἼἽἾἿὀὁὂὃὄὅὈὉὊὋὌὍὐὑὒὓὔὕὖὗὙὛὝὟὠὡὢὣὤὥὦὧὨὩὪὫὬὭὮὯὰάὲέὴήὶίὸόὺύὼώᾀᾁᾂᾃᾄᾅᾆᾇᾈᾉᾊᾋᾌᾍᾎᾏᾐᾑᾒᾓᾔᾕᾖᾗᾘᾙᾚᾛᾜᾝᾞᾟᾠᾡᾢᾣᾤᾥᾦᾧᾨᾩᾪᾫᾬᾭᾮᾯᾰᾱᾲᾳᾴᾶᾷᾸᾹᾺΆᾼ᾽ι᾿῀῁ῂῃῄῆῇῈΈῊΉῌ῍῎῏ῐῑῒΐῖῗῘῙῚΊ῝῞῟ῠῡῢΰῤῥῦῧῨῩῪΎῬ῭΅`ῲῳῴῶῷῸΌῺΏῼ´῾‒–—―‖‗‘’‚‛“”„‟†‡•…‰′″‴‹›‼‽‾⁞⁰⁴⁵⁶⁷⁸⁹₠₡₢₣₤₥₦₧₨₩₪₫€₭₮₯₰₱₲₳₴₵₶₷₸₹₺₻₼₽₾℅ℓ№℗™Ω℮⅍ⅎ⅓⅔⅛⅜⅝⅞ↄ←↑→↓↔↕↨∂∆∏∑−∙√∞∟∩∫≈≠≡≤≥⌂⌐⌠⌡─│┌┐└┘├┤┬┴┼═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬▀▄█▌▐░▒▓■□▪▫▬▲►▼◄◊○◌●◘◙◦☺☻☼♀♂♠♣♥♦♪♫♯ⱠⱡⱢⱣⱤⱥⱦⱧⱨⱩⱪⱫⱬⱭⱮⱯⱰⱱⱲⱳⱴⱵⱶⱷⱸⱹⱺⱻⱾⱿ⸗꞉꞊Ꞌꞌﬀﬁﬂﬃﬄﬅﬆﬓﬔﬕﬖﬗ﬩﴾﴿"
    charString: "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿─│┌┐└┘├┤┬┴┼═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬▀▄█▌▐░▒▓■□▪▫▬▲►▼◄◊○◌●◘◙◦"
    //charString: "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|ȵȶȷȸȹ╠╡╢╣╤╥╦╧╨╩╪╫╬▀▄■□▪▫▬▲►▼◄◊○",
    //charString: "Helowrdjn↓./\↔↕↨"
}

function main(){
    $( "render" ).style.display = "none";
    $( "info" ).innerHTML = "<h1>Select a font and image to render...</h1><select id='sel'></select><br><input id='imgfile' type='file' accept='.ppm' multiple='false' onchange='preDoImage()'><h1>Or generate a new one:</h1><button onclick = 'window.requestAnimationFrame( gcCallback )'>Do it!</button>"
    for( i in renderers ){
	var s = $( "sel" );
	var no = document.createElement( "option" );
	no.text = i;
	s.add( no );
    }    
    
}

function gcCallback( t ){
    if( renderer.canvas == null ){
	loadRenderer( "" );
	$( "render" ).style.display = "block";
	$( "info" ).style.display = "none";
    }
    for( var i = 0; i < 30 && renderer.numChars < renderer.charString.length; ++i )
	getChar();

    loadBar( 0, renderer.numChars / renderer.charString.length, "Generating charecter bitmaps..." );

    if( renderer.numChars != renderer.charString.length )
	window.requestAnimationFrame( gcCallback );
    else
	window.requestAnimationFrame( gkCallback );
}

function getChar(){
    renderer.ctx.clearRect( 0, 0, 100, 60 );
    renderer.ctx.font = renderer.font;
    var cs = renderer.charString[ renderer.numChars ];
    renderer.ctx.fillText( cs, 0, 40 );
    var img = renderer.ctx.getImageData( 0, 0, 100, 60 );
    var ci = cropImage( img );
    var ans = {};
    ans.data = renderer.ctx.getImageData( ci.x, ci.y, ci.width, ci.height ).data;
    ans.width = ci.width;
    ans.height = ci.height;
    ans.baseline = ( ci.y + ci.height ) - 40;
    if( ans.baseline > renderer.lowestBaseline )
	renderer.lowestBaseline = ans.baseline;
    ans.x = ci.x;
    renderer.chars[ cs ] = ans;
    renderer.numChars += 1;
    renderer.steps += 1;
}

function gkCallback( t ){
    var i = 0;
    renderer.ctx.clearRect( 0, 0, 100, 60 );
    while( getKern() && i < 50 )
	++i;

    loadBar( renderer.k1 / renderer.charString.length, renderer.k2 / renderer.charString.length,
	     "Measuring kerning..." ); 
		     
    if( renderer.k1 != renderer.charString.length )
	window.requestAnimationFrame( gkCallback );
    else{
	delete renderer.k1;
	delete renderer.k2;
	delete renderer.steps;
	delete renderer.maxSteps;
	delete renderer.startTime;
	window.requestAnimationFrame( saveRenderer );
    }
}

function getKern(){
    renderer.ctx.clearRect( 0, 0, 100, 60 );
    if( renderer.k1 == null ){
	renderer.k1 = 0;
	renderer.k2 = 0;
	renderer.kerns = {};
    }
    var cs1 = renderer.charString[ renderer.k1 ];
    var cs2 = renderer.charString[ renderer.k2 ];
    if( renderer.kerns[ cs1 ] == null )
	renderer.kerns[ cs1 ] = {};

    renderer.ctx.font = renderer.font;
    renderer.ctx.fillText( cs1 + cs2, 0, 40 );
    var img = renderer.ctx.getImageData( 0, 0, 100, 60 );
    var cr = cropImage( img );
    {
	var x, y;
	var ci = renderer.chars[ cs2 ];
	var done = false;
	for( x = ci.width - 1; x > 0; --x ){
	    for( y = 0; y < ci.height; ++y ){
		var my = y + 40 - ( ci.height - ci.baseline );
		var p1 = ci.data[ ( y * ci.width + x ) * 4 + 3 ];
		var p2 = img.data[ ( my * img.width + x + ( cr.width + cr.x - ci.width ) + 0 ) * 4 + 3 ];
		if( p1 > p2 ){
		    alert( x + "  " + y + "\n" + p1 + " " + p2 + "\n" + renderer.k1 + " " + renderer.k2 + "\n" + cs1 + cs2 );
		    done = true;
		    break;
		}
	    }
	    if( done )
		break;
	}

	if( done ){
	    var s = "rows " + cs1 + cs2 + "\n";
	    x = ci.width - 1;
	    for( y = 0; y < ci.height; ++y ){
		var my = y + 40 - (ci.height - ci.baseline );
		s += ci.data[ ( y * ci.width + x - 2 ) * 4 + 3 ];
		s += ","
		s += ci.data[ ( y * ci.width + x - 1 ) * 4 + 3 ];
		s += ","
		s += ci.data[ ( y * ci.width + x ) * 4 + 3 ];
		s += ":  ";
		s += img.data[ ( my * img.width + x + ( cr.width + cr.x - ci.width ) - 2 ) * 4 + 3 ];
		s += ",";
		s += img.data[ ( my * img.width + x + ( cr.width + cr.x  - ci.width ) - 1 ) * 4 + 3 ];
		s += ",";
		s += img.data[ ( my * img.width + x + ( cr.width + cr.x - ci.width ) + 0 ) * 4 + 3 ];
		s += ",";
		s += img.data[ ( my * img.width + x + ( cr.width + cr.x - ci.width ) + 1 ) * 4 + 3 ];
		s += ",";
		s += img.data[ ( my * img.width + x + ( cr.width + cr.x - ci.width ) + 2 ) * 4 + 3 ];
		s += "\n";
	    }
	    
	    alert( s );
	}
	var calcw = renderer.chars[ cs2 ].x +
	    renderer.chars[ cs1 ].width + renderer.chars[ cs2 ].width;
	if( calcw != cr.width )
	    renderer.kerns[ cs1 ][ cs2 ] = cr.width - calcw;
		
    }
    
    

     renderer.steps += 1;
    
    renderer.k2 += 1;
    if( renderer.k2 == renderer.charString.length ){
	renderer.k2 = 0;
	renderer.k1 += 1;
	if( renderer.k1 == renderer.charString.length )
	    return false;
    }
    return true;
}

function saveRenderer(){
    if( renderer.canvas.style.display != "none" ){
	renderer.canvas.style.display = "none";
	$( "info" ).style.display = "block";
	
	$( "info" ).innerHTML = "<h1>Wait for it...</h1><p>Compressing...</p>";
	window.requestAnimationFrame( saveRenderer );
    }else{
	var str = JSON.stringify(  renderer );
	var cstr = LZString.compressToBase64( str );
	var ans = "";
	for( var i = 0; i < cstr.length; i += 80 )
	    ans += ( "\"" + cstr.slice( i, i + 80 ) + "\",\n" );
	
	
	$( "info" ).innerHTML = "<h1>Instructions</h1><p style=\"white-space: pre-wrap\">Please place the following in renderers.js, replacing &lt;platformName&gt; with a string, e.g. \"Windows 10 Chrome Facebook\";</p><input id=\"imgfile\"type=\"file\" accept=\".ppm\" multiple=\"false\" onchange=\"preDoImage()\"><pre style=\"white-space: pre-wrap;word-break: break-all;\">renderers[ &lt;platformName&gt; ] = [\n" + ans + "\"\"];</pre>"
    }
}



function preDoImage(){
    $( "render" ).style.display = "none";
    renderer.sl = $( "sel" );
    renderer.fn = $( "imgfile" ).files[ 0 ];
    $( "info" ).innerHTML = "<h1>Decompressing please wait...</h1>";
    window.setTimeout( doImage, 100 );
}
function doImage(){
    var sl = renderer.sl; delete renderer.sl;
    var fn = renderer.fn; delete renderer.fn;
    if( sl != null &&
	sl.value != null ){
	loadRenderer( sl.value );
    }
    renderer.fr = new FileReader;
    renderer.fr.onloadend = doImage2;
    renderer.fr.readAsBinaryString( fn );
}
function doImage2(){

    var ppm = renderer.fr.result.split( "\n" );
    delete renderer.fr;
    $( "info" ).innerHTML = "";
    renderer.canvas.style.display = "block";
    renderer.ctx.clearRect( 0, 0, renderer.canvas.width, renderer.canvas.height );

    var ds = 4;
    var ds2 = 0;
    var wh = ppm[ 2 ].split( " " );
    var img = renderer.ctx.createImageData( wh[ 0 ], wh[ 1 ] );
    while( ds < ppm.length ){
	img.data[ ds2++ ] = parseInt( ppm[ ds++ ] );
	img.data[ ds2++ ] = parseInt( ppm[ ds++ ] );
	img.data[ ds2++ ] = parseInt( ppm[ ds++ ] );
	img.data[ ds2++ ] = 255;
    }
    renderer.compImage = img;
    
    
    renderer.canvas.width = wh[ 0 ];
    renderer.canvas.height = wh[ 1 ];
    renderer.charImage = renderer.ctx.createImageData( renderer.canvas.width, renderer.canvas.height );
    renderer.rx = 0;
    renderer.ry = renderer.lineHeight;
    
    renderer.lastchar = null;
    renderer.out = "";
    
    window.requestAnimationFrame( drawImage );
}
function drawImage(){
    var hs = scoreImage( renderer );
    var highestScore = hs.high;
    var highestIndex = hs.index;
    

    if( highestScore == -1000000000000000000000000000 ){
	delete renderer.lastchar;
	renderer.out += "<br>";
	renderer.rx = 0;
	renderer.ry += renderer.lineHeight;
	if( renderer.ry >= renderer.compImage.height ){
	    delete renderer.x;
	    delete renderer.y;
	    delete renderer.compImage;
	    delete renderer.charImage;
	    delete renderer.rx;
	    delete renderer.ry; 
	    delete renderer.steps;
	    delete renderer.out;
	}else
	    window.requestAnimationFrame( drawImage );

    }else{
	var c = renderer.charString[ highestIndex ];
	var ci = renderer.chars[ c ];
	var mx;
	var my = ci.baseline;
	if( renderer.lastchar != null ){
	    var k = renderer.kerns[ renderer.lastchar ][ c ];
	    if( k != null ){
		mx = k + ci.x;
	    }
	    else
		mx = ci.x;
	}else
	    mx = ci.x;
	
	for( var x = 0; x < ci.width; ++x ){
	    for( var y = renderer.lowestBaseline - renderer.lineHeight - 1;y < renderer.lowestBaseline; ++y ){
		var cx = renderer.rx + x + mx;
		var cy = renderer.ry + y;
		var cix = x;
		var ciy = ( y - renderer.lowestBaseline ) + renderer.lowestBaseline +
		    ( ci.height - ci.baseline );
		if( ciy >= 0 && ciy < ci.height )
		    renderer.charImage.data[ ( cy * renderer.charImage.width + cx ) * 4 + 3 ] +=
		    ci.data[ ( ciy * ci.width + cix ) * 4 + 3 ];
	    }
	}
	renderer.lastchar = c;
	renderer.rx += ( mx + ci.width );
	
	renderer.out += escapeHtml( c );
	renderer.ctx.putImageData( renderer.charImage, 0, 0 );
	$( "info" ).innerHTML = renderer.pre + renderer.out + renderer.post;
	window.requestAnimationFrame( drawImage );
    }
}



function loadBar( frac, frac2, hint ){    
    renderer.ctx.save();
    renderer.ctx.clearRect( 0, 0, renderer.canvas.width, 200 );

    renderer.ctx.textAlign = "center";
    renderer.ctx.font = "20px Sans-serif";
    var tt = ( performance.now() - renderer.startTime ) / 1000;
    var tstr = (tt % 60).toFixed( 4 );
    if( tstr.length == 6 )
	tstr = "0" + tstr;
    renderer.ctx.fillText( "Time elapsed: " + Math.floor( tt / 60 ).toFixed( 0 ) + ":" + tstr, renderer.canvas.width / 2, 90 );
    var tot = tt / ( renderer.steps / renderer.maxSteps ) - tt;
    tstr = (tot % 60).toFixed( 4 );
    if( tstr.length == 6 )
	tstr = "0" + tstr;
    renderer.ctx.fillText( "Time remaining: " + Math.floor( tot / 60 ).toFixed( 0 ) + ":" + tstr, renderer.canvas.width / 2, 120 );
    renderer.ctx.fillText( hint, renderer.canvas.width / 2, 160 );
    
    renderer.ctx.fillStyle = "green";
    renderer.ctx.fillRect( 0, 0, renderer.canvas.width * frac, 20 );
    renderer.ctx.fillStyle = "black";
    renderer.ctx.fillRect( renderer.canvas.width * frac, 0, renderer.canvas.width, 20 );
    renderer.ctx.fillStyle = "green";
    renderer.ctx.fillRect( 0, 25, renderer.canvas.width * frac2, 20 );
    renderer.ctx.fillStyle = "black";
    renderer.ctx.fillRect( renderer.canvas.width * frac2, 25, renderer.canvas.width, 20 );
    renderer.ctx.restore();
}


function escapeHtml( string ){
    var entityMap = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': '&quot;',
	"'": '&#39;',
	"/": '&#x2F;'
    };
    return String( string ).replace( /[&<>"'\/]/g, function( s ){
	return entityMap[ s ];
    });
}

    
function loadRenderer( name ){
    if( name && name != "" )
	renderer = JSON.parse( LZString.decompressFromBase64( renderers[ name ].join("") ) )
    renderer.canvas = $( "render" );    
    renderer.ctx = renderer.canvas.getContext( "2d" );
    renderer.steps = 0;
    renderer.maxSteps = ( renderer.charString.length + 1 ) * renderer.charString.length;
    renderer.startTime = performance.now();


    renderer.font = "14px Arial";
    renderer.pre = '<span style="font-family: arial; font-size: 14px; line-height: 18px">'
    renderer.post = '</span>'
    renderer.lineHeight = 18;
}    
