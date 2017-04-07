(function( $ ) {
	var createMap = function( coords, zoom ) {
		var coordsParts = coords.split( "," );
		if( typeof google !== "undefined" ) {
			var options = {
				zoom: zoom,
				center: new google.maps.LatLng( coordsParts[0], coordsParts[1] ),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: true
			};

			var map = new google.maps.Map( document.getElementById( "map" ), options);

			var marker = new google.maps.Marker({
				position: new google.maps.LatLng( coordsParts[0], coordsParts[1] ),
				map: map
			});

		}

	};

	$(function() {
		$( "li", "#places" ).on( "click", function() {
			var $li = $( this );
			$li.addClass( "selected" ).siblings().removeClass( "selected" );
			createMap( $li.data( "coords" ), $li.data( "zoom" ) );
		});
		$( "li", "#places" ).eq( 0 ).trigger( "click" );
	});
})( jQuery );
