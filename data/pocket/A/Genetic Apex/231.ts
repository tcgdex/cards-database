import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rapidash",
		'fr-fr': "Galopa",
		'es-es': "Rapidash",
		'it-it': "Rapidash",
		'de-de': "Gallopa",
		'pt-br': "Rapidash",
		'ko-kr': "날쌩마"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",

	dexId: [78],
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Ponyta"
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Fire Mane",
			'fr-fr': "Crinière de Feu",
			'es-es': "Crin de Fuego",
			'it-it': "Criniera di Fuoco",
			'de-de': "Flammenmähne",
			'pt-br': "Crina de Fogo",
			'ko-kr': "불꽃의갈기"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Star",

	description: {
		'en-us': "This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.",
		'fr-fr': "Ce Pokémon traverse les plaines à plus de 240 km/h,\nsa crinière flamboyante flottant au vent.",
		'es-es': "Su ardiente crin ondea al viento mientras atraviesa\nextensas praderas a una velocidad de 240 km/h.",
		'it-it': "Sfreccia nelle praterie a una velocità di 240 km/h,\nfacendo sventolare la sua criniera ardente.",
		'de-de': "Die lodernde Mähne dieses Pokémon flattert im\nWind, wenn es mit einer Geschwindigkeit von\n240 km/h über Felder und Wiesen galoppiert.",
		'pt-br': "Este Pokémon pode ser encontrado galopando\nnas pradarias, com sua crina de fogo ao vento,\na velocidades de até 240 km/h.",
		'ko-kr': "불타는 갈기를 휘날리며\n시속 240km의 속도로\n넓은 초원을 달려나간다."
	},

	boosters: ["charizard"]
}

export default card
