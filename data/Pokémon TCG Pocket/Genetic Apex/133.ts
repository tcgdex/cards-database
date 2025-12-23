import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Woobat",
		fr: "Chovsourir",
		es: "Woobat",
		it: "Woobat",
		de: "Fleknoil",
		'pt-br': "Woobat",
		ko: "또르박쥐"
	},

	illustrator: "MAHOU",
	category: "Pokemon",

	dexId: [527],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			it: "Rosicchiamento",
			de: "Nagen",
			'pt-br': "Roída",
			ko: "갉기"
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "While inside a cave, if you look up and see lots of heart-shaped marks lining the walls, it's evidence that Woobat live there.",
		fr: "La présence de marques en forme de cœur sur les parois\ndes grottes indique la présence de Chovsourir à l'intérieur.",
		es: "Si al alzar la vista en una cueva se ven marcas\ncon forma de corazón en las paredes, es señal\nde que Woobat la ha convertido en su guarida.",
		it: "Se alzando lo sguardo in una grotta si\nvedono impronte a forma di cuore sulle\npareti, è segno che vi abitano dei Woobat.",
		de: "Herzförmige Flecken an der Decke einer Höhle\nsind ein sicheres Zeichen dafür, dass sie von\nFleknoil behaust wird.",
		'pt-br': "Se você estiver em uma caverna e vir várias\nmarcas com formato de coração nas paredes,\né sinal de que Woobat vivem ali.",
		ko: "동굴을 올려다봤을 때 벽에\n하트 모양 자국이 있다면\n또르박쥐가 살고 있다는 증거다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
