Polymer({
    
    properties:{
        src:{
            type: String,
            value: ''
            },
        src144:{
            type: String,
            value: 'undefined'
        },
        src180:{
            type: String,
            value: 'undefined'
        },
        src216:{
            type: String,
            value: 'undefined'            
        },
        src288:{
            type: String,
            value: 'undefined'
        },
        src360:{
             type: String,
            value: 'undefined'           
        },
        src480:{
            type: String,
            value: 'undefined'  
        },
        src720:{
            type: String,
            value: 'undefined'            
        },
        src1080:{
            type: String,
            value: 'undefined'            
        },
        tr:{
            type: String,
            value: 'none'
        },
        temacolor:{
            type: String,
            value: 'negro'
        },
        videosize:{
            type: String,
            value: '640'
        },
        imgposter:{
            type: String,
            value: ''
        },
//////////////////////////        
        cc:{
            type: String,
            value: ''
        },
        
        cc2:{
            type: String,
            value: ''
        },
        
        cc3:{
            type: String,
            value: ''
        },
///////////////////////////////        
        label:{
            type: String,
            value: ''
        },
        
        label2:{
            type: String,
            value: ''
        },
        
        label3:{
            type: String,
            value: ''
        },
 ///////////////////////////       
        lang:{
            type: String,
            value: ''
        },
        
        lang2:{
            type: String,
            value: ''
        },
        
        lang3:{
            type: String,
            value: ''
        }     
    },
    
    is: 'video-player',
    
    ready: function () {
        var src = this.src;
        var src144 = this.src144;
        var src180 = this.src180;
        var src216 = this.src216;
        var src288 = this.src288;
        var src360 = this.src360;
        var src480 = this.src480;
        var src720 = this.src720;
        var src1080 = this.src1080;
        var temacolorv = this.temacolor;
        document.getElementById("video-controls").setAttribute("class", temacolorv);
        var videosize = this.videosize + "px";
        var videosize2 = this.videosize;
        
        (function () {
	       'use strict';
            
	        var supportsVideo = !!document.createElement('video').canPlayType;

            if (supportsVideo) {
                var videoContainer = document.getElementById('videoContainer');
                
                var video = document.getElementById('video');               
                video.style.width = videosize2*16/9;
                video.style.height = videosize;
                
                videoContainer.style.width = String(parseInt(videosize2)*16/9) + "px";
                videoContainer.style.height = videosize;
                
                var videoControls = document.getElementById('video-controls');
                videoControls.style.width = String(parseInt(videosize2)*16/9) + "px";
                
                var barra = document.getElementById('barra');
                
                barra.style.width = String(parseInt(videosize2)*16/9) + "px";
                video.controls = false;
                video.volume = 0;
                videoControls.setAttribute('data-state', 'visible');
                
                //
                video.barrac = false;
                barra.setAttribute('data-state', 'visible');
                //
                var playpause = document.getElementById('playpause');
                var progress = document.getElementById('progress');
                var progressBar = document.getElementById('progress-bar');
                var fullscreen = document.getElementById('fs');
                var subtitles = document.getElementById('subtitles');
                var transcriptb = document.getElementById('transcriptb');
                var tiempo = document.getElementById('tiempo');
                var botonv = document.getElementById("bsp-volume");
                var handleb = document.getElementById("handleid");
                var calidad = document.getElementById("calidad");
                var info = document.getElementById("informacion");
                
                    if(src144 != 'undefined'){
                        var listacalidad = document.createElement("div");
                        var aa1 = "listacalidad";
                        var aa3 = aa1.concat("144");
                        listacalidad.setAttribute("id",aa3);
                        listacalidad.setAttribute("class", "listacalidad");
                        listacalidad.innerHTML +=  "<font color='white'>144p</font>";
                        listacalidad.addEventListener('click', cambiarcalidad.bind(null, src144));                           document.getElementById('menucalidad').appendChild(listacalidad); 
                    }
                    if(src180 != 'undefined'){
                        var listacalidad = document.createElement("div");
                        var aa1 = "listacalidad";
                        var aa3 = aa1.concat("180");
                        listacalidad.setAttribute("id",aa3);
                        listacalidad.setAttribute("class", "listacalidad");
                        listacalidad.innerHTML +=  "<font color='white'>180p</font>";
                        listacalidad.addEventListener('click', cambiarcalidad.bind(null, src180));                           document.getElementById('menucalidad').appendChild(listacalidad); 
                    }
                    if(src216 != 'undefined'){
                        var listacalidad = document.createElement("div");
                        var aa1 = "listacalidad";
                        var aa3 = aa1.concat("216");
                        listacalidad.setAttribute("id",aa3);
                        listacalidad.setAttribute("class", "listacalidad");
                        listacalidad.innerHTML +=  "<font color='white'>216p</font>";
                        listacalidad.addEventListener('click', cambiarcalidad.bind(null, src216));                           document.getElementById('menucalidad').appendChild(listacalidad); 
                    }
                    if(src288 != 'undefined'){
                        var listacalidad = document.createElement("div");
                        var aa1 = "listacalidad";
                        var aa3 = aa1.concat("288");
                        listacalidad.setAttribute("id",aa3);
                        listacalidad.setAttribute("class", "listacalidad");
                        listacalidad.innerHTML +=  "<font color='white'>288p</font>";
                        listacalidad.addEventListener('click', cambiarcalidad.bind(null, src288));                           document.getElementById('menucalidad').appendChild(listacalidad); 
                    }
                    if(src360 != 'undefined'){
                        var listacalidad = document.createElement("div");
                        var aa1 = "listacalidad";
                        var aa3 = aa1.concat("360");
                        listacalidad.setAttribute("id",aa3);
                        listacalidad.setAttribute("class", "listacalidad");
                        listacalidad.innerHTML +=  "<font color='white'>360p</font>";
                        listacalidad.addEventListener('click', cambiarcalidad.bind(null, src360));                           document.getElementById('menucalidad').appendChild(listacalidad); 
                    }
                    if(src480 != 'undefined'){
                        var listacalidad = document.createElement("div");
                        var aa1 = "listacalidad";
                        var aa3 = aa1.concat("480");
                        listacalidad.setAttribute("id",aa3);
                        listacalidad.setAttribute("class", "listacalidad");
                        listacalidad.innerHTML +=  "<font color='white'>480p</font>";
                        listacalidad.addEventListener('click', cambiarcalidad.bind(null, src480));                           document.getElementById('menucalidad').appendChild(listacalidad); 
                    }
                    if(src720 != 'undefined'){
                        var listacalidad = document.createElement("div");
                        var aa1 = "listacalidad";
                        var aa3 = aa1.concat("720");
                        listacalidad.setAttribute("id",aa3);
                        listacalidad.setAttribute("class", "listacalidad");
                        listacalidad.innerHTML +=  "<font color='white'>720p</font>";
                        listacalidad.addEventListener('click', cambiarcalidad.bind(null, src720));                           document.getElementById('menucalidad').appendChild(listacalidad); 
                    }
                    if(src1080 != 'undefined'){
                        var listacalidad = document.createElement("div");
                        var aa1 = "listacalidad";
                        var aa3 = aa1.concat("1080");
                        listacalidad.setAttribute("id",aa3);
                        listacalidad.setAttribute("class", "listacalidad");
                        listacalidad.innerHTML +=  "<font color='white'>1080p</font>";
                        listacalidad.addEventListener('click', cambiarcalidad.bind(null, src1080));                           document.getElementById('menucalidad').appendChild(listacalidad); 
                    }
                    if(src != 'undefined'){
                        var listacalidad = document.createElement("div");
                        var aa1 = "listacalidad";
                        var aa3 = aa1.concat("dafault");
                        listacalidad.setAttribute("id",aa3);
                        listacalidad.setAttribute("class", "listacalidad");
                        listacalidad.innerHTML +=  "<font color='white'>default</font>";
                        listacalidad.addEventListener('click', cambiarcalidad.bind(null, src));                           document.getElementById('menucalidad').appendChild(listacalidad); 
                    }
                    else{
                        video.src = src;
                    }

                 document.getElementById("infoboton").innerHTML +=  "<font color='white'>  URL VIDEO: "+ video.src +"<br/>"+ video.height+" <br/></font>";                           
                
                fullscreen.style.marginLeft = String(parseInt((videosize2)*16/9) - 30) + "px";
                transcriptb.style.marginLeft = String(parseInt((videosize2)*16/9) - 110) + "px";
                subtitles.style.marginLeft = String(parseInt((videosize2)*16/9) - 80) + "px";
                tiempo.style.marginLeft = String(parseInt((videosize2)*16/9) -180) + "px";
                info.style.marginLeft = String(parseInt((videosize2)*16/9) - 175) + "px";
                calidad.style.marginLeft = String(parseInt((videosize2)*16/9) - 400) + "px";
                
                function cambiarcalidad(qq){
                    video.src = qq;
                    if(temacolorv == "blanco" || temacolorv == "gris"){
                        playpause.setAttribute('data-state', 'playn');
                    }
                    else{
                       playpause.setAttribute('data-state', 'play'); 
                    }
                    
                }
                
                calidad.addEventListener("click", function(){
                    if(calidad){  
                        menucalidad.style.display = (menucalidad.style.display == 'none' ? 'block' : 'none');
                    }
                });
                
                info.addEventListener("click", function(){
                    if(info){   
                        infoboton.style.display = (infoboton.style.display == 'none' ? 'block' : 'none');
                    }
                });
                
                if(temacolorv == "blanco" || temacolorv == "gris"){
                    tiempo.style.color = 'black';
                    subtitles.setAttribute('data-state', 'subtitlesn');
                    transcriptb.setAttribute('data-state', 'transcriptbn');
                    fullscreen.setAttribute('data-state', 'go-fullscreenn');
                    playpause.setAttribute('data-state', 'playn');
                    botonv.setAttribute('data-state', 'aan');
                    calidad.setAttribute('data-state','calidadn');
                    handleb.setAttribute('class', 'bsp-volume-slider-handlen');
                    info.setAttribute('data-state', 'infon');
                }
                else{
                    tiempo.style.color = 'white';
                    subtitles.setAttribute('data-state', 'subtitles');
                    transcriptb.setAttribute('data-state', 'transcriptb');
                    fullscreen.setAttribute('data-state', 'go-fullscreen');
                    playpause.setAttribute('data-state', 'play');
                    botonv.setAttribute('data-state', 'aa');
                    calidad.setAttribute('data-state','calidad');
                    handleb.setAttribute('class', 'bsp-volume-slider-handle');
                    info.setAttribute('data-state', 'info');
                }
                var supportsProgress = (document.createElement('progress').max !== undefined);
                if (!supportsProgress) progress.setAttribute('data-state', 'fake');

                var fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
                if (!fullScreenEnabled) {
                    fullscreen.style.display = 'none';
                }
     
                var setFullscreenData = function(state) {
                    videoContainer.setAttribute('data-fullscreen', !!state);
                    if(temacolorv == "blanco" || temacolorv == "gris"){
                        fullscreen.setAttribute('data-state', !!state ? 'cancel-fullscreenn' : 'go-fullscreenn');   
                    }
                    else{
                        fullscreen.setAttribute('data-state', !!state ? 'cancel-fullscreen' : 'go-fullscreen');  
                    }
                        
                }

                var isFullScreen = function() {
                    return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
                }

                var handleFullscreen = function() {

                    if (isFullScreen()) {

                            if (document.exitFullscreen) document.exitFullscreen();
                            else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
                            else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
                            else if (document.msExitFullscreen) document.msExitFullscreen();
                            setFullscreenData(false);
                        }
                        else {
                            if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
                            else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
                            else if (videoContainer.webkitRequestFullScreen) {

                                video.webkitRequestFullScreen();
                            }
                            else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
                            setFullscreenData(true);
                        }
                    }

                if (document.addEventListener) {

                    video.addEventListener('loadedmetadata', function() {
                        progress.setAttribute('max', video.duration);
                    });

                    var changeButtonState = function(type) {
                        if (type == 'playpause') {
                            if (video.paused || video.ended) {
                                if(temacolorv == "blanco" || temacolorv == "gris"){
                                    playpause.setAttribute('data-state', 'playn');
                                    playpause.title = "play";
                                    
                                }
                                else{
                                    playpause.setAttribute('data-state', 'play');
                                    playpause.title = "play";
                                }
                                
                            }
                            else {
                                if(temacolorv == "blanco" || temacolorv == "gris"){
                                    playpause.setAttribute('data-state', 'pausen');
                                    playpause.title = "pause";
                                }
                                else{
                                   playpause.setAttribute('data-state', 'pause'); 
                                   playpause.title = "pause";
                                }
                                
                            }
                        }
                    }
                    video.addEventListener('play', function() {
                        changeButtonState('playpause');
                    }, false);
                    video.addEventListener('pause', function() {
                        changeButtonState('playpause');
                    }, false);
		
                    playpause.addEventListener('click', function(e) {
                        if (video.paused || video.ended) video.play();
                        else video.pause();
                    });	


                    for (var i = 0; i < video.textTracks.length; i++) {
                        video.textTracks[i].mode = 'hidden';
                    }

			var subtitleMenuButtons = [];
			var createMenuItem = function(id, lang, label) {
				var listItem = document.createElement('li');
				var button = listItem.appendChild(document.createElement('button'));
				button.setAttribute('id', id);
				button.className = 'subtitles-button';
				if (lang.length > 0) button.setAttribute('lang', lang);
				button.value = label;
				button.setAttribute('data-state', 'inactive');
                
				button.appendChild(document.createTextNode(label));
				button.addEventListener('click', function(e) {

					subtitleMenuButtons.map(function(v, i, a) {
						subtitleMenuButtons[i].setAttribute('data-state', 'inactive');
					});

					var lang = this.getAttribute('lang');
                    
					for (var i = 0; i < video.textTracks.length; i++) {

						if (video.textTracks[i].language == lang) {
                            video.textTracks[i].mode = 'showing';
							this.setAttribute('data-state', 'active');
                            subtitles.style.color = '#D10D0D';
                            break;
                        }
						else {
							video.textTracks[i].mode = 'hidden';
                            subtitles.style.color = '';
						}
					}
					subtitlesMenu.style.display = 'none';
				});
				subtitleMenuButtons.push(button);
				return listItem;
			}
            
			var subtitlesMenu;
			if (video.textTracks) {
				var df = document.createDocumentFragment();
				var subtitlesMenu = df.appendChild(document.createElement('ul'));
				subtitlesMenu.className = 'subtitles-menu';
				subtitlesMenu.appendChild(createMenuItem('subtitles-off', '', 'Off'));
				for (var i = 0; i < video.textTracks.length; i++) {
					subtitlesMenu.appendChild(createMenuItem('subtitles-' + video.textTracks[i].language, video.textTracks[i].language, video.textTracks[i].label));
				}
				videoContainer.appendChild(subtitlesMenu);
			}
			subtitles.addEventListener('click', function(e) {
				if (subtitlesMenu) {
					subtitlesMenu.style.display = (subtitlesMenu.style.display == 'block' ? 'none' : 'block');
				}
			});
                    
                    fs.addEventListener('click', function(e) {
                        handleFullscreen();
                    });
                    
                    transcriptb.addEventListener('click', function(e){
                        if(transcript){
                            transcript.style.display = (transcript.style.display == 'block' ? 'none' : 'block');
                            if(transcript.style.display == 'block'){
                                transcriptb.style.color = '#D10D0D';  
                            }
                            if(transcript.style.display == 'none'){
                                transcriptb.style.color = '';  
                            }
                        }
                    });

                    video.addEventListener('timeupdate', function() {
 
                        if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
                        progress.value = video.currentTime;
                        
                        progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
                        
                        var curmins = Math.floor(video.currentTime / 60);
	                    var cursecs = Math.floor(video.currentTime - curmins * 60);

	                    if(cursecs < 10){ 
                            cursecs = "0"+cursecs; 
                        }
	                    if(curmins < 10){ 
                            curmins = "0"+curmins; 
                        }
	                   tiempo.innerHTML = curmins+":"+cursecs;
                        });

                    progress.addEventListener('click', function(e) {
                        var pos = (e.pageX  - (this.offsetLeft + this.offsetParent.offsetLeft + this.offsetParent.offsetParent.offsetLeft)) / this.offsetWidth;
                        console.log(pos)
                        video.currentTime = pos * video.duration;
                    });


                    document.addEventListener('fullscreenchange', function(e) {
                        setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
                    });
                    document.addEventListener('webkitfullscreenchange', function() {
                        setFullscreenData(!!document.webkitIsFullScreen);
                    });
                    document.addEventListener('mozfullscreenchange', function() {
                        setFullscreenData(!!document.mozFullScreen);
                    });
                    document.addEventListener('msfullscreenchange', function() {
                        setFullscreenData(!!document.msFullscreenElement);
                    });
                }
             }

            (function () {
    var VolumeControl, control, getElementPercentage, bind = function (fn, me) {
            return function () {
                return fn.apply(me, arguments);
            };
        };
    getElementPercentage = function (click, elm) {
        var rect;
        rect = elm.getBoundingClientRect();
        return (click.pageX - rect.left) / rect.width * 100;
    };
    VolumeControl = function () {
        function VolumeControl() {
            this.volumeMute = bind(this.volumeMute, this);
            this.volumeStopHandler = bind(this.volumeStopHandler, this);
            this.volumeMoveHandler = bind(this.volumeMoveHandler, this);
            this.volumeDrag = bind(this.volumeDrag, this);
            this.volumeClick = bind(this.volumeClick, this);
            this.volumeHoverOut = bind(this.volumeHoverOut, this);
            this.volumeHoverIn = bind(this.volumeHoverIn, this);
            this.elm = {
                volumeWrap: document.getElementsByClassName('bsp-volume-wrap')[0],
                volumeSlider: document.getElementsByClassName('bsp-volume-slider')[0],
                volumeProgress: document.getElementsByClassName('bsp-volume-slider-progress')[0]
            };
            this.elm.volumeWrap.addEventListener('mouseenter', this.volumeHoverIn);
            this.elm.volumeWrap.addEventListener('mouseleave', this.volumeHoverOut);
            this.elm.volumeSlider.addEventListener('click', this.volumeClick);
            this.elm.volumeSlider.addEventListener('mousedown', this.volumeDrag);
            document.getElementById('bsp-volume').addEventListener('click', this.volumeMute);
        }
        VolumeControl.prototype.volumeHoverIn = function (e) {
            
            if (this.volumeHoverTimout) {
                clearTimeout(this.volumeHoverTimout);
            }
            return this.elm.volumeWrap.classList.add('bsp-volume-show');
        };
        VolumeControl.prototype.volumeHoverOut = function (e) {
            return this.volumeHoverTimout = setTimeout(function (_this) {
                return function () {
                    return _this.elm.volumeWrap.classList.remove('bsp-volume-show');
                };
            }(this), 300);
        };
        VolumeControl.prototype.volumeClick = function (e) {
            var percent;
            percent = getElementPercentage(e, this.elm.volumeSlider);
            return this.volumeSet(percent);
        };
        VolumeControl.prototype.volumeSet = function (percent) {
            this.elm.volumeProgress.style.width = percent + '%';
            return this.lastVolume = video.volume = percent / 100;
        };
        VolumeControl.prototype.volumeDrag = function (e) {
            e.preventDefault();
            document.addEventListener('mousemove', this.volumeMoveHandler);
            return document.addEventListener('mouseup', this.volumeStopHandler);
        };
        VolumeControl.prototype.volumeMoveHandler = function (e) {
            var percent;
            percent = getElementPercentage(e, this.elm.volumeSlider);
            if (percent < 0) {
                percent = 0;
            } else if (percent > 100) {
                percent = 100;
            }
            return this.volumeSet(percent);
        };
        VolumeControl.prototype.volumeStopHandler = function (e) {
            document.removeEventListener('mousemove', this.volumeMoveHandler);
            return document.removeEventListener('mouseup', this.volumeStopHandler);
        };
        VolumeControl.prototype.volumeMute = function () {
            var vol;
            vol = video.volume > 0 ? 0 : this.lastVolume || 1;
            video.volume = vol;
            return this.elm.volumeProgress.style.width = vol * 100 + '%';
        };
        return VolumeControl;
    }();
    control = new VolumeControl();
}.call(this));

         })(); //use strict
         
    } //ready function
         }); // polymer function