import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Shellder",
		'fr-fr': "Kokiyas",
		'es-es': "Shellder",
		'it-it': "Shellder",
		'de-de': "Muschas",
		'pt-br': "Shellder",
		'ko-kr': "셀러"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [90],
	hp: 70,
	types: ["Water"],

	description: {
		'en-us': "It is encased in a shell that is harder than diamond. Inside, however, it is surprisingly tender.",
		'fr-fr': "Une coquille plus dure que le diamant le protège.\nIl est toutefois étonnamment tendre à l'intérieur.",
		'es-es': "Está metido en una concha más dura que el\ndiamante, pero tiene un cuerpo muy blando.",
		'it-it': "La conchiglia esterna è più dura del diamante.\nL'interno, invece, è sorprendentemente morbido.",
		'de-de': "Seine Schale ist härter als Diamant. Im Inneren ist\nes jedoch überraschend weich.",
		'pt-br': "Este Pokémon é envolto em uma concha\nmais dura que diamante. O seu interior,\nporém, é surpreendentemente macio.",
		'ko-kr': "다이아몬드보다 단단한\n껍데기에 싸여 있지만\n속은 의외로 말랑하다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'de-de': "Tackle",
			'pt-br': "Investida",
			'ko-kr': "몸통박치기"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card