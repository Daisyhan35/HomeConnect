const houses = [
	{name: "IVY COTTAGE", 
	 image: "Images/pic1.jpg",
	 alt: "pic1"
	},

	{name: "THE HAVEN", 
	 image: "Images/pic2.jpg",
	 alt: "pic2"
	},

	{name: "KING'S PALACE", 
	 image: "Images/pic3.jpeg",
	 alt: "pic3"
	},

	{name: "CHIMNEY COTTAGE", 
	 image: "Images/pic4.jpeg",
	 alt: "pic4"
	},

	{name: "HUNTERS WOOD", 
	 image: "Images/pic5.jpeg",
	 alt: "pic5"
	},

	{name: "WINTERFELL", 
	 image: "Images/pic6.jpeg",
	 alt: "pic6"
	},

	{name: "MEADOW VIEW",
	 image: "Images/pic7.jpeg",
	 alt: "pic7"
	},

	{name: "OAKLAND",
	 image: "Images/pic8.jpg",
	 alt: "pic8"
	},

	{name: "PONDEROSA",
	 image: "Images/pic9.jpeg",
	 alt: "pic9"
	},

	{name: "BLUE IVY COTTAGE",
	 image: "Images/pic10.jpeg",
	 alt: "pic10"
	},

	{name: "MIDDLEEARTH",
	 image: "Images/pic11.jpeg",
	 alt: "pic11"
	},

	{name: "NEVERLAND",
	 image: "Images/pic12.jpeg",
	 alt: "pic12"
	},

	{name: "HOLLY COTTAGE",
	 image: "Images/pic13.jpeg",
	 alt: "pic13"
	},

	{name: "THE GABLES",
	 image: "Images/pic14.jpeg",
	 alt: "pic14"
	},

	{name: "BROWN ORCHARD",
	 image: "Images/pic15.jpeg",
	 alt: "pic15"
	},

	{name: "CORNER COTTAGE",
	 image: "Images/pic16.jpeg",
	 alt: "pic16"
	},

	{name: "HAPPY MORNINGS",
	 image: "Images/pic17.jpeg",
	 alt: "pic17"
	},

	{name: "PONDEROSA",
	 image: "Images/pic18.jpeg",
	 alt: "pic18"
	},

	{name: "NEWLAND",
	 image: "Images/pic19.jpeg",
	 alt: "pic19"
	},

	{name: "DREAMSVILLE",
	 image: "Images/pic20.jpeg",
	 alt: "pic20"
	},

	{name: "COAST HOUSE",
	 image: "Images/pic21.jpeg",
	 alt: "pic21"
	},

	{name: "HILLSIDE HOUSE",
	 image: "Images/pic22.jpeg",
	 alt: "pic22"
	},

	{name: "BUNGALOW",
	 image: "Images/pic23.jpeg",
	 alt: "pic23"
	},

	{name: "WONDERLAND",
	 image: "Images/pic24.jpeg",
	 alt: "pic24"
	},
]



var housesList = houses.map((el, id) => (
	document.write(`
	   <div class="column">
	     <a href="connect.html" class="connect">
          <img src="${el.image}" alt="${el.alt}" />
         </a>
          <div class="heart-btn">
            <div id="image-${id}" class="content">
            	<span>&#9829</span>
            	<span>Like</span>
            </div>
            <div class="name">
            	<p>${el.name}</p>
            </div>
          </div>
       </div>
		`)
	))

$(document).ready(function(){
	$(".content").click(function(e){
		$(`#${e.currentTarget.id}`).toggleClass('liked')
	});
});




