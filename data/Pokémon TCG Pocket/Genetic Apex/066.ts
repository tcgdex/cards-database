import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Shellder",
		fr: "Kokiyas",
		es: "Shellder",
		it: "Shellder",
		de: "Muschas",
		'pt-br': "Shellder",
		ko: "셀러"
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",

	dexId: [90],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Tongue Slap",
			fr: "Gros Coup de Langue",
			es: "Bofetón Lengua",
			it: "Linguasberla",
			de: "Zungenschelle",
			'pt-br': "Tapa de Língua",
			ko: "혀로 막치기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It is encased in a shell that is harder than diamond. Inside, however, it is surprisingly tender.",
		fr: "Une coquille plus dure que le diamant le protège.\nIl est toutefois étonnamment tendre à l'intérieur.",
		es: "Está metido en una concha más dura que el\ndiamante, pero tiene un cuerpo muy blando.",
		it: "La conchiglia esterna è più dura del diamante.\nL'interno, invece, è sorprendentemente morbido.",
		de: "Seine Schale ist härter als Diamant. Im Inneren ist\nes jedoch überraschend weich.",
		'pt-br': "Este Pokémon é envolto em uma concha\nmais dura que diamante. O seu interior,\nporém, é surpreendentemente macio.",
		ko: "다이아몬드보다 단단한\n껍데기에 싸여 있지만\n속은 의외로 말랑하다."
	},

	boosters: ["mewtwo"]
}

export default card
