/*
 * Copyright (c) 2010 Andrew Petersen
 * 
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 * 
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 * 
 *    1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 * 
 *    2. Altered source versions must be plainly marked as such, and must not be
 *    misrepresented as being the original software.
 * 
 *    3. This notice may not be removed or altered from any source
 *    distribution.
 */

function ID(){
	// init key cache
	this.keyCache = [];
	for(var i = 0; i < 255; i++){
		this.keyCache[i] = 0;
	}
	
	this.lastKey = 0;
	this.currentKey = 0;
	this.gameTime = 0;
	this.lastDelta = 0;
	
	// ready the listeners!
	var self = this;
	window.addEventListener('keydown', function(e){ self.onKeyDown_(e) }, false);
	window.addEventListener('keyup', function(e){ self.onKeyUp_(e) }, false);
}

ID.prototype = {
	
	Update: function(deltaT){
		
		this.lastDelta = deltaT;
		this.gameTime += deltaT;
		
		for(var i = 0; i < this.keyCache.length; i++){
			var c = this.keyCache[i];
			if( c > 0 ) c += deltaT; 
			//if( c == -2 ) c =  0; // 0 resets
			//if( c == -1 ) c = -2; // gives a little more time to be "just released"
			if( c == -1 ) c =  0; // 0 resets
			this.keyCache[i] = c;
		}
		
	}
	, IsKeyDown: function(k){
		return this.keyCache[k] > 0;
	}
	, IsKeyUp: function(k){
		return this.keyCache[k] <= 0;
	}
	, IsNewKeyPress: function(k){
		if( this.keyCache[k] >= ID.EPSILON 
		&& this.keyCache[k] < this.lastDelta + ID.EPSILON ){
			return true;
		} else {
			return false;
		}
	}
	, IsNewKeyRelease: function(k){
		if( this.keyCache[k] < 0 ){
			return true;
		} else {
			return false;
		}
	}
	, TimePressed: function(k){
		return this.keyCache[k];
	}
	, onKeyDown_: function(e){
		this.keyCache[e.keyCode] = ID.EPSILON;
	}
	, onKeyUp_: function(e){
		this.keyCache[e.keyCode] = -1;
	}
}

ID.EPSILON = 0.00001;

ID.SPACE			=	32 ;
ID.BACKSPACE		=	8  ;
ID.TAB				=	9  ;
ID.ENTER			=	13 ;
ID.SHIFT			=	16 ;
ID.CTRL				=	17 ;
ID.ALT				=	18 ;
ID.PAUSE_BREAK		=	19 ;
ID.CAPS_LOCK		=	20 ;
ID.ESCAPE			=	27 ;
ID.PAGE_UP			=	33 ;
ID.PAGE_DOWN		=	34 ;
ID.END				=	35 ;
ID.HOME				=	36 ;
ID.LEFT_ARROW		=	37 ;
ID.UP_ARROW			=	38 ;
ID.RIGHT_ARROW		=	39 ;
ID.DOWN_ARROW		=	40 ;
ID.INSERT			=	45 ;
ID.DELETE			=	46 ;

ID.ZERO				=	48 ;
ID.ONE				=	49 ;
ID.TWO				=	50 ;
ID.THREE			=	51 ;
ID.FOUR				=	52 ;
ID.FIVE				=	53 ;
ID.SIX				=	54 ;
ID.SEVEN			=	55 ;
ID.EIGHT			=	56 ;
ID.NINE				=	57 ;
         	       
ID.A				=	65 ;
ID.B				=	66 ;
ID.C				=	67 ;
ID.D				=	68 ;
ID.E				=	69 ;
ID.F				=	70 ;
ID.G				=	71 ;
ID.H				=	72 ;
ID.I				=	73 ;
ID.J				=	74 ;
ID.K				=	75 ;
ID.L				=	76 ;
ID.M				=	77 ;
ID.N				=	78 ;
ID.O				=	79 ;
ID.P				=	80 ;
ID.Q				=	81 ;
ID.R				=	82 ;
ID.S				=	83 ;
ID.T				=	84 ;
ID.U				=	85 ;
ID.V				=	86 ;
ID.W				=	87 ;
ID.X				=	88 ;
ID.Y				=	89 ;
ID.Z				=	90 ;

ID.LEFT_WINDOWS		=	91 ;
ID.RIGHT_WINDOWS	=	92 ;

ID.NUMPAD0			=	96 ;
ID.NUMPAD1			=	97 ;
ID.NUMPAD2			=	98 ;
ID.NUMPAD3			=	99 ;
ID.NUMPAD4			=	100;
ID.NUMPAD5			=	101;
ID.NUMPAD6			=	102;
ID.NUMPAD7			=	103;
ID.NUMPAD8			=	104;
ID.NUMPAD9			=	105;

ID.MULTIPLY			=	106;
ID.ADD				=	107;
ID.SUBTRACT			=	109;
ID.DECIMAL_POINT	=	110;
ID.DIVIDE			=	111;

ID.F1				=	112;
ID.F2				=	113;
ID.F3				=	114;
ID.F4				=	115;
ID.F5				=	116;
ID.F6				=	117;
ID.F7				=	118;
ID.F8				=	119;
ID.F9				=	120;
ID.F10				=	121;
ID.F11				=	122;
ID.F12				=	123;
ID.NUM_LOCK			=	144;
ID.SCROLL_LOCK		=	145;
ID.SEMICOLON		=	186;
ID.EQUAL_SIGN		=	187;
ID.COMMA			=	188;
ID.DASH				=	189;
ID.PERIOD			=	190;
ID.FORWARD_SLASH	=	191;
ID.GRAVE_ACCENT		=	192;
ID.OPEN_BRACKET		=	219;
ID.BACK_SLASH		=	220;
ID.CLOSE_BRAKET		=	221;
ID.SINGLE_QUOTE		=	222;