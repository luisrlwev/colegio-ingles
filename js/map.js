function initMap(){var map=new google.maps.Map(document.getElementById('map'),{zoom:17,center:{lat:20.654575,lng:-87.064836},mapTypeControlOptions:{mapTypeIds:['roadmap','satellite','hybrid','terrain','styled_map']},streetViewControl:false});var styledMapType=new google.maps.StyledMapType([{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"labels.text","stylers":[{"visibility":"off"}]}],{name:'Colegio Inglés Playa'});map.mapTypes.set('styled_map',styledMapType);map.setMapTypeId('styled_map');var icon='img/marcador.png';var contentColegio='<div class="info-window">'+'<h3 class="color">Colegio Inglés Playa</h3>'+'<div class="info-content">'+'<p class="text-dark">¡Encontraste el mejor Colegio de Playa!</p>'+'<p>Lote 4 Fraccion 24 Col Ejidal, Sin Nombre, 77710 Playa del Carmen, Q.R..</p>'+'</div>'+'</div>';var infowindowColegio=new google.maps.InfoWindow({content:contentColegio});var marker=new google.maps.Marker({position:{lat:20.654575,lng:-87.064836},map:map,title:'Colegio Inglés Playa',icon:icon});marker.addListener('click',function(){infowindowColegio.open(map,marker);});}