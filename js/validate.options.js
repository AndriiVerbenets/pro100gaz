// Forbid cyrillic
function withoutCyr(input) {
	var value = input.value;
	var re = /а|б|в|г|д|е|ё|ж|з|и|ї|і|ё|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|є|ю|я/gi;
	if (re.test(value)) {
		value = value.replace(re, '');
		input.value = value;
	}
}

// Login form
$("#login-form").validate({
	highlight: function ( element, errorClass, validClass ) {
		$( element )
			.parents( ".input-cover" )
			.addClass( "error-item" )
			.removeClass( "valid-item" );
	},

	unhighlight: function (element, errorClass, validClass) {
		$( element )
			.parents( ".input-cover" )
			.addClass( "valid-item" )
			.removeClass( "error-item" );
	},

	rules: {
		username: {
			required: true,
			minlength: 2
		},
		pass: {
			required: true
		}
	},
	messages: {
		username: {
			required: "required field",
			minlength: "Minimum 2 characters"
		},
		pass: {
			required:"required field"
		}
	}
});

$("#forgot-form").validate({
	highlight: function ( element, errorClass, validClass ) {
		$( element )
			.parents( ".input-cover" )
			.addClass( "error-item" )
			.removeClass( "valid-item" );
	},

	unhighlight: function (element, errorClass, validClass) {
		$( element )
			.parents( ".input-cover" )
			.addClass( "valid-item" )
			.removeClass( "error-item" );
	},

	rules: {
			email: {
				required: true,
				email: true
			}
	},
	messages: {
			email: {
				required: "required field",
				email: "wrong e-mail format"
			}
	}
});

// Contact form
$("#contact-form").validate({
	highlight: function ( element, errorClass, validClass ) {
		$( element )
			.parents( ".input-cover" )
			.addClass( "error-item" )
			.removeClass( "valid-item" );
	},

	unhighlight: function (element, errorClass, validClass) {
		$( element )
			.parents( ".input-cover" )
			.addClass( "valid-item" )
			.removeClass( "error-item" );
	},
	rules: {
		username: {
			required: true,
			minlength: 2
		},
		email: {
			required: true,
			email: true
		},
		phone: {
			required: true,
			number: true
		},
		company: {
			required: true
		},
		message: {
			required: true,
			minlength: 7
		},
		pass: {
			required: true
		}
	},
	messages: {
		username: {
			required: "required field",
			minlength: "Minimum 2 characters"
		},
		email: {
			required: "required field",
			email: "wrong e-mail format"
		},
		phone: {
			required:"required field"
		},
		company: {
			required:"required field"
		},
		message: {
			required:"required field",
			minlength: "Minimum 7 characters"
		},
		pass: {
			required:"required field"
		}
	}
});
