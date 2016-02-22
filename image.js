function cropImage( img ){
     var x, y;
    var loop;
    var ans = {};
    for( x = 0; x < img.width; ++x ){
	loop = true;
	for( y = 0; y < img.height; ++y ){
	    if( img.data[ 4 * ( y * img.width + x ) + 3 ] != 0 ){
		loop = false;
		break;
	    }
	}
	if( !loop )
	    break;
    }
    ans.x = x;
    if( ans.x == img.width ){
	ans.x = 0;
	ans.width = 0;
	ans.y = 0;
	ans.height = 0;
	return ans;
    }
    for( x = img.width - 1; x > 0; --x ){
	loop = true;
	for( y = 0; y < img.height; ++y ){
	    if( img.data[ 4 * ( y * img.width + x ) + 3 ] != 0 ){
		loop = false;
		break;
	    }
	}
	if( !loop )
	    break;
    }
    ans.width = x - ans.x + 1;
    for( y = 0; y < img.height; ++y ){
	loop = true;
	for( x = 0; x < img.width; ++x ){
	    if( img.data[ 4 * ( y * img.width + x ) + 3 ] != 0 ){
		loop = false;
		break;
	    }
	}
	if( !loop )
	    break;
    }
    ans.y = y;
    for( y = img.height - 1; y > 0; --y ){
	loop = true;
	for( x = 0; x < img.width; ++x ){
	    if( img.data[ 4 * ( y * img.width + x ) + 3 ] != 0 ){
		loop = false;
		break;
	    }
	}
	if( !loop )
	    break;
    }
    ans.height = y - ans.y + 1;
    return ans;    
}



function scoreImage( renderer ){
    var highestScore = -1000000000000000000000000000;
    var highestIndex = 0;
    for( var i = 0; i < renderer.charString.length; ++i ){
	var c = renderer.charString[ i ];
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
	var score = 0;
	for( var x = 0; x < ci.width + mx; ++x ){
	    for( var y = renderer.lowestBaseline - renderer.lineHeight - 1; y < renderer.lowestBaseline; ++y ){

		var cx = renderer.rx + x + mx;
		var cy = renderer.ry + y;
		var cix = x - mx;
		var ciy = ( y - renderer.lowestBaseline ) + renderer.lowestBaseline +
		    ( ci.height - ci.baseline );
		var ca = renderer.charImage.data[ ( cy * renderer.charImage.width + cx ) * 4 + 3 ];
		if( ciy >= 0 && ciy < ci.height && cix >= 0 && cix < ci.width )
		    ca += ci.data[ ( ciy * ci.width + cix ) * 4 + 3 ];
		ca = 255 - ca;
		score -= Math.abs( ca - renderer.compImage.data[ ( cy * renderer.compImage.width + cx ) * 4 + 2 ] );		score -= Math.abs( ca - renderer.compImage.data[ ( cy * renderer.compImage.width + cx ) * 4 + 1 ] );		score -= Math.abs( ca - renderer.compImage.data[ ( cy * renderer.compImage.width + cx ) * 4 + 0 ] );
		score += 256;
	    }
	}
	if( ( renderer.rx + ci.width + mx < renderer.compImage.width ) &&
	    ( score / ( ci.width + mx ) ) > highestScore ){
	    highestScore = score / ( ci.width + mx );
	    highestIndex = i;
	}
    }
    return { high: highestScore, index: highestIndex };
}
