/* Js de acloud

	Scripts personalizados para el sitio

 */
$(document).ready(function() {
	//Animación hover para los iconos del login
	const styleA = {
		color: '#3C8DBC', transition: 'all 0.2s ease'
	}
	const styleD = {
		color: '#a7b1b7', transition: 'all 0.2s ease'
	}
	$('.usuario').on({
		focus: function(){
			$(this).siblings().css(styleA);
		},
		blur: function(){
			$(this).siblings().css(styleD);
		}
	});

	$('.clave').on({
		focus: function(){
			$(this).siblings().css(styleA);
		},
		blur: function(){
			$(this).siblings().css(styleD);
		}
	});

  /*codigo para el acordeon activos*/
  let colapsar = $(".colapsar");
  let cambiarIndicador = "";

  colapsar.click(function() {
	 cambiarIndicador = $(this).children("i:last");
	 cambiarIndicador = cambiarIndicador[0].className;

	 $(".colapsar .icon-up").addClass("icon-down");
	 $(".colapsar .icon-up").removeClass("icon-up");

	 if (
		cambiarIndicador == "icon-down pull-right bajarIcon" ||
		cambiarIndicador == "pull-right bajarIcon icon-down"
	 ) {
		$(this)
		  .children("i:last")
		  .addClass("icon-up");
		$(this)
		  .children("i:last")
		  .removeClass("icon-down");
	 } else {
		$(this)
		  .children("i:last")
		  .addClass("icon-down");
		$(this)
		  .children("i:last")
		  .removeClass("icon-up");
	 }
  });

  //colapsar
  let colapsarPerfiles = $(".colapsarPerfiles");
  let cambiarIcon = "";

  colapsarPerfiles.click(function() {
	 cambiarIcon = $(this).children("i:last");
	 cambiarIcon = cambiarIcon[0].className;

	 $(".colapsarPerfiles .icon-up").addClass("icon-down");
	 $(".colapsarPerfiles .icon-up").removeClass("icon-up");

	 if (
		cambiarIcon == "icon-down pull-right" ||
		cambiarIcon == "pull-right icon-down"
	 ) {
		$(this)
		  .children("i:last")
		  .addClass("icon-up");
		$(this)
		  .children("i:last")
		  .removeClass("icon-down");
	 } else {
		$(this)
		  .children("i:last")
		  .addClass("icon-down");
		$(this)
		  .children("i:last")
		  .removeClass("icon-up");
	 }
  });

  //evento de ocultar y mostrar los iconos de editar y eliminar
  $(".varAdmin").mouseenter(function() {
	 let este = $(this)
		.find(".opacidad")
		.animate(
		  {
			 opacity: 1
		  },
		  10
		);
  });

  $(".varAdmin").mouseleave(function() {
	 let este = $(this)
		.find(".opacidad")
		.animate(
		  {
			 opacity: 0
		  },
		  10
		);
  });

  //seleccionar iconos del adminperfiles
  $(".misBordes").click(function() {
	 let clase = $(this);
	 $(this).css("border", "3px solid #3c8dbc");
	 clase = clase[0].className;
	 if (
		clase == "item panel seleccionIcono misBordes" ||
		clase == "item panel misBordes seleccionIcono"
	 ) {
		$(this).removeClass("seleccionIcono");
		$(this).css("border", "3px solid #ddd");
	 } else {
		$(this).addClass("seleccionIcono");
	 }
  });
  $(".misBordes").mouseenter(function() {
	 $(this).css("border", "3px solid #bbb");
  });
  $(".misBordes").mouseleave(function() {
	 $(this).css("border", "3px solid #ddd");
  });

  //script para el slider del amindPerfiles
  let image = $(".elemento");
  let ancho = image.length * 120 + image.length * 10;
  let mover = 0;
  $(".contenedorSlider").css("width", ancho + "px");
  let limite = $(".contenedorSlider").width() - 8 * 120;
  $(".adelante").click(function() {
	 if (mover < limite) {
		mover += 960;
		$(".contenedorSlider").animate({
		  left: -mover
		});
	 }
  });
  $(".atras").click(function() {
	 if (mover > 0) {
		mover -= 960;
		$(".contenedorSlider").animate({
		  left: -mover
		});
	 }
  });
  //seleccionar iconos
  $(".selector").click(function() {
	 let permisoActivo = $(this);
	 permisoActivo = permisoActivo[0].className;
	 if (
		permisoActivo == "btn btn-default btn-sm selector" ||
		permisoActivo == "btn btn-sm selector btn-default"
	 ) {
		$(this).removeClass("btn-default");
		$(this).addClass("btn-primary");
	 } else {
		$(this).addClass("btn-default");
		$(this).removeClass("btn-primary");
	 }
  });
});
