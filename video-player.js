 Polymer({
          
          properties:{
              src:{
                type: String,
                value: '',
              },
              xml:{
                type: String,
                value: ''
              },
              tema:{
                  type: String,
                  value: 'none'
              },
              temacolor:{
                  type: String,
                  value: 'negro'
              },
              width:{
                  type: String,
                  value: '630',
              },
              height:{
                  type: String,
                  value: '381'
              }
          },
        is: "c-presentacion",
        
          ready:function(){
                var zz = 21;
                var zzz = 6;
                var width2 = this.width;
                var height2 = this.height;
                var sinc = 1;
                var vinc = document.getElementById('vinc');  
                var canvas = document.getElementById('the-canvas');
                var url = this.src;
                var numero = document.getElementById('page_num');
                var xml = this.xml;
                var buttonzin = document.getElementById('zin');
                var buttonzout = document.getElementById('zout');
                var t = 0;
                var pageNum = 1;
                var pdfDoc = null,
                pageRendering = false,
                pageNumPending = null,
                scale = 0.8,
                canvas = document.getElementById('the-canvas'),
                ctx = canvas.getContext('2d');

                var div_diapositiva = document.getElementById('diapositiva');
                var video = parent.document.getElementById('video');
                var lineatiempo = parent.document.getElementById('progress');
                var temab = document.getElementById("item");
                var botones = document.getElementById("botones");
                var pagx = document.getElementById("pag");
                var pagcount = document.getElementById("page_count");
                var temacolorc = this.temacolor;
                var prev = document.getElementById("prev");
                var nextx = document.getElementById("next");
              
                document.getElementById("botones").setAttribute("class", temacolorc);
                temab.setAttribute('data-state', 'teman');
                
                document.getElementById("ccc").style.width = width2 + "px";
                document.getElementById("ccc").style.height = height2 + "px";
                canvas.style.width = parseInt(width2) + parseInt + "px";
                canvas.style.height = height2 + "px";
                document.getElementById("the-canvas").style.width = String(parseInt(width2) - parseInt(zz)) + "px";
                document.getElementById("the-canvas").style.height = String(parseInt(height2) - parseInt(zz)) + "px";
                botones.style.width = String(parseInt(this.width) + parseInt(zzz)) + "px";
              
                buttonzout.style.marginLeft = String(parseInt(this.width) - 21) + "px";
                buttonzin.style.marginLeft = String(parseInt(this.width) - 51) + "px";
                
                              
                if(temacolorc == "blanco" || temacolorc == "gris"){
                    pagx.style.color = 'black';
                    pagcount.style.color = 'black';
                    numero.style.color = 'black';
                    buttonzin.setAttribute('data-state', 'inn');
                    buttonzout.setAttribute('data-state', 'outn');
                    temab.setAttribute('data-state', 'teman');
                    prev.setAttribute('data-state', 'antn');
                    vinc.setAttribute('data-state', 'vinn');
                    nextx.setAttribute('data-state', 'sign');
                }
                else{
                    pagx.style.color = 'white';
                    pagcount.style.color = 'white';
                    numero.style.color = 'white';
                    buttonzin.setAttribute('data-state', 'in');
                    buttonzout.setAttribute('data-state', 'out');
                    temab.setAttribute('data-state', 'tema');
                    prev.setAttribute('data-state', 'ant');
                    vinc.setAttribute('data-state', 'vin');
                    nextx.setAttribute('data-state', 'sig');       
                }
                
                document.getElementById("botones").style.background = this.bgncolor;
                document.getElementById("pag").style.color = this.iconcolor;
                document.getElementById("page_num").style.color = this.iconcolor;
                document.getElementById("page_count").style.color = this.iconcolor;
                document.getElementById("ccc").style.width = this.dimension;
                
              
                temab.addEventListener('click', function(e){
                    if(menu){  
                        menu.style.display = (menu.style.display == 'none' ? 'block' : 'none');
                    }
                });
              
                function margen(bb){
                    var auxiliar = (220*bb)/640;
                    return auxiliar;
                }
                var xmlDoc = cargarXMLDoc(xml);
                if (xmlDoc != null)     
                {
                     var diapositiva_tag = xmlDoc.getElementsByTagName("presentacion")[0].getElementsByTagName("diapositiva");
                     var aux=0;
                     var auxiliar2 = 0;
                     var contador = 0;
                     var temat = new Array(diapositiva_tag.length);
                     var seg = new Array(diapositiva_tag.length); 
                     var pag = new Array(diapositiva_tag.length);
                     var pag2 = new Array(diapositiva_tag.length);
                    
                    
                     for (var i = 0; i < diapositiva_tag.length; i++)
                     {
                        var tiempo = diapositiva_tag[i].getElementsByTagName("tiempo")[0].childNodes[0].nodeValue;

                         var a = tiempo.split(':');
                         seg[aux] = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
                         pag[aux] = parseInt(diapositiva_tag[i].getElementsByTagName("pagina")[0].childNodes[0].nodeValue);
                        if(diapositiva_tag[contador].getElementsByTagName("tema")[0] == undefined){
                            if(contador > diapositiva_tag.length){
                                contador++;
                            }
                        }
                        else{
                            temat = diapositiva_tag[contador].getElementsByTagName("tema")[0].childNodes[0].nodeValue;
                            pag[aux] = parseInt(diapositiva_tag[contador].getElementsByTagName("pagina")[0].childNodes[0].nodeValue);
                            
                            var listatema = document.createElement("div");
                            var aa = "listatema";
                            var aa2 = aa.concat(i);
                            listatema.setAttribute("id",aa2);
                            listatema.setAttribute("class", "listatema");
                            listatema.innerHTML +=  "<font color='white'>" + temat + " (pag " + pag[aux] + ") </font>";
                            listatema.addEventListener('click', temamenu.bind(null, pag[aux]));
                            document.getElementById('menu').appendChild(listatema);
                            
                        }
                           aux++;
                        contador++;
                     }
                }
                    video.addEventListener("timeupdate", cambiar);
                    lineatiempo.addEventListener("click", cambiar);
                    buttonzin.addEventListener("click", zoomin);
                    buttonzout.addEventListener("click", zoomout);
              
                    canvas.style.width = width2;
                    canvas.style.height = height2;
              
                    function temamenu(pa){
                    var a = 0;
                    if (pa > pdfDoc.numPages || pa < 1) {
                        return;
                    }
                    pageNum = pa;
                    queueRenderPage(pageNum);
                    while(pageNum != pag[a]){
                        a++;
                    }
                    video.currentTime = seg[a];  
                    }
              
                function zoomin(){
                    if(scale == 1.8){
                        return;
                    }
                    canvas.style.width = "";
                    canvas.style.height = "";
                    scale = scale + 0.25;
                    queueRenderPage(pageNum);
              }
              
              function zoomout(){
                    if(scale == 1.05 || scale == 0.8 ){
                        canvas.style.width = "609px";
                        canvas.style.height = "360px";
                        return;
                    }
                    canvas.style.width = "";
                    canvas.style.height = "";
                    scale = scale - 0.25;
                    queueRenderPage(pageNum);
              }
                 
                if(temacolorc == "blanco" || temacolorc == "gris"){
                    vinc.setAttribute('data-state', 'vinn');
                 }
                 else{      
                    vinc.setAttribute('adata-state', 'vin');  
                 }
              
                function funvinc(){ 
                    var estado = vinc.getAttribute('data-state');
                    if(temacolorc != "blanco" || temacolorc !="gris"){
                        if (estado == 'desvin') {
                            vinc.setAttribute('data-state', 'vin');
                            sinc = 1;
                        }
                        else {
                            vinc.setAttribute('data-state','desvin');
                            sinc = 0;
                        }
                    }
                    if(temacolorc == "blanco" || temacolorc == "gris"){
                        if (estado == 'desvinn') {
                            vinc.setAttribute('data-state', 'vinn');
                            sinc = 1;
                        }
                        else {
                            vinc.setAttribute('data-state','desvinn');
                            sinc = 0;
                        }
                    }
                }

                vinc.addEventListener('click', funvinc);
		
    
              function cambiar(){
                  if(sinc == 1){
                    var h = 1;
                    var condicion = 0;
                        while(condicion == 0){  
                            if(Math.floor(video.currentTime) <= seg[h-1]){
                                condicion = 1;
                                t = h - 1;
                                pageNum = pag[t]
                                queueRenderPage(pageNum)
                            }
                            if(h > diapositiva_tag.length){
                                condicion = 1;
                                h = 1;
                            }
                                h++;      
                        } 
                  }
                  else if(sinc == 0){}
              }
              
                function cargarXMLDoc(archivoXML) {
                        var xmlDoc = archivoXML;
                        if (window.XMLHttpRequest){
                            xmlDoc = new window.XMLHttpRequest();
                            xmlDoc.open("GET", archivoXML, false);
                            xmlDoc.send("");
                            return xmlDoc.responseXML;

                        }
                        
                        else if (ActiveXObject("Microsoft.XMLDOM")){
                            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                            xmlDoc.async = false;
                            xmlDoc.load(archivoXML);
                            return xmlDoc;
                        }
                        alert("Error cargando el documento.");
                        return null;         
                }

                function renderPage(num) {
                    
                    pageRendering = true;
                    pdfDoc.getPage(num).then(function(page) {
                        var viewport = page.getViewport(scale);
                        canvas.height = viewport.height;                         
                        canvas.width = viewport.width;  
                        
                        var renderContext = {
                            canvasContext: ctx,
                            viewport: viewport
                        };
                        var renderTask = page.render(renderContext);

                        renderTask.promise.then(function () {
                            pageRendering = false;
                            if (pageNumPending !== null) {
                                renderPage(pageNumPending);   
                                pageNumPending = null;
                            }
                        });
                    });
                    document.getElementById('page_num').textContent = pageNum;
                }

                function queueRenderPage(num) {
                    if(num == 0){
                        num = 1;
                    }
                    if (pageRendering) {
                        pageNumPending = num;
                    } else {
                        renderPage(num);
                        
                    }
                }
              
                function onPrevPage() {
                    var a = 0;
                    if(pageNum == 1){
                        return;
                    }
                    pageNum--;
                    queueRenderPage(pageNum);
                    if(sinc == 1){
                        while(pageNum != pag[a]){
                            a++;
                        }
                        video.currentTime = seg[a];
                    }
                    else if(sinc == 0){
                    }
                    
                }
                document.getElementById('prev').addEventListener('click', onPrevPage);


                function onNextPage() {
                    var a = 0;
                    if (pageNum >= pdfDoc.numPages) {
                        return;
                    }
                    pageNum++;
                    queueRenderPage(pageNum);
                    if(sinc == 1){
                        while(pageNum != pag[a]){
                            a++;
                        }
                        video.currentTime = seg[a];
                    }
                    else if(sinc == 0){}
                }

                document.getElementById('next').addEventListener('click', onNextPage);
                
                PDFJS.getDocument(url).then(function (pdfDoc_) {
                    pdfDoc = pdfDoc_;
                    document.getElementById('page_count').textContent = pdfDoc.numPages;

                    renderPage(pageNum);
                });      
                    
          } //ready
              
          
    }); //polymer
