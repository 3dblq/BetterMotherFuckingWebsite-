popup('Hey la nouvelle start-up propose une solution de dropshipping revolutionnante pour gagner 450$/membre en 30 seconde intéresser ?', 10000);
		
		function popup(text, duration)
		{
			function displayPopup()
			{
				var answer = confirm(text);

				if(answer)
					document.location = 'https://www.youtube.com/watch?v=JrhTguKW8CA';
			}

			setTimeout(displayPopup, duration);
        }
        