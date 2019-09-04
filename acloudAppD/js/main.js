/* Js de acloud

	Scripts personalizados para el sitio

 */

	//Animación hover para los iconos del login
	var iconos= document.querySelector(".icon-user");
	var iconos2= document.querySelector(".icon-lock");

	function icono(num){

		if(num ==1){
			iconos.style.color="#3C8DBC";
			iconos.style.transition="all 0.2s ease";
		}else{
			iconos2.style.color="#3C8DBC";
			iconos2.style.transition="all 0.2s ease";
		}
	}

	function iconoC(){
		iconos.style.color="#a7b1b7";
		iconos.style.transition="all 0.2s ease";

		iconos2.style.color="#a7b1b7";
		iconos2.style.transition="all 0.2s ease";
	}


	/*codigo para el acordeon activos*/
	var colapsar = $(".colapsar");
	var cambiarIndicador = '';

	colapsar.click(function(){
		cambiarIndicador = $(this).children("i:last");
		cambiarIndicador = cambiarIndicador[0].className;

		$(".colapsar .icon-up").addClass("icon-down");
		$(".colapsar .icon-up").removeClass("icon-up");

		if(cambiarIndicador == 'icon-down pull-right bajarIcon'  ||  cambiarIndicador == 'pull-right bajarIcon icon-down' ){
				$(this).children("i:last").addClass("icon-up");
				$(this).children("i:last").removeClass("icon-down");

		}else{

			$(this).children("i:last").addClass("icon-down");
			$(this).children("i:last").removeClass("icon-up");
		}
		})

	//colapsar
	var colapsarPerfiles= $(".colapsarPerfiles");
	var cambiarIcon="";

	colapsarPerfiles.click(function(){
		cambiarIcon = $(this).children("i:last");
		cambiarIcon = cambiarIcon[0].className;

		$(".colapsarPerfiles .icon-up").addClass("icon-down");
		$(".colapsarPerfiles .icon-up").removeClass("icon-up");

		if(cambiarIcon == 'icon-down pull-right'  ||  cambiarIcon == 'pull-right icon-down' ){
				$(this).children("i:last").addClass("icon-up");
				$(this).children("i:last").removeClass("icon-down");

		}else{

			$(this).children("i:last").addClass("icon-down");
			$(this).children("i:last").removeClass("icon-up");
		}
		})

		//evento de ocultar y mostrar los iconos de editar y eliminar
		$(".varAdmin").mouseenter(function(){
			var este = $(this).find(".opacidad").animate({
				opacity:1
			},10);
		})

		$(".varAdmin").mouseleave(function(){
			var este = $(this).find(".opacidad").animate({
				opacity:0
			},10);
		})

//seleccionar iconos del adminperfiles
	$(".misBordes").click(function(){
		var clase =  $(this);
	$(this).css("border","3px solid #3c8dbc");
		clase = clase[0].className;
		if(clase == 'item panel seleccionIcono misBordes' || clase== 'item panel misBordes seleccionIcono'){
			$(this).removeClass("seleccionIcono");
			$(this).css("border","3px solid #ddd");

		}else{
			$(this).addClass("seleccionIcono");
		}
		})
		$(".misBordes").mouseenter(function(){
			$(this).css("border","3px solid #bbb");
		})
		$(".misBordes").mouseleave(function(){
			$(this).css("border","3px solid #ddd");
		})

	//script para el slider del amindPerfiles
		var image = $(".elemento");
		var ancho = image.length * 120+(image.length*10);
		var mover = 0 ;
			$(".contenedorSlider").css("width",ancho+"px");
		var limite = $(".contenedorSlider").width() - (8*120);
			$(".adelante").click(function(){
				if(mover < limite){
					mover += 960;
						$(".contenedorSlider").animate({
								left: -mover
					})
				}
			})
			$(".atras").click(function(){
				if(mover > 0){
					mover -= 960;
						$(".contenedorSlider").animate({
							left: -mover
					})
				}
			})
	//seleccionar iconos
	$(".selector").click(function(){
		var permisoActivo =  $(this);
		permisoActivo = permisoActivo[0].className;
		if(permisoActivo == 'btn btn-default btn-sm selector' || permisoActivo== 'btn btn-sm selector btn-default'){
			$(this).removeClass("btn-default");
			$(this).addClass("btn-primary");

		}else{
			$(this).addClass("btn-default");
			$(this).removeClass("btn-primary");
		}
		})