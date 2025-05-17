import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Rapidash",
		fr: "Galopa",
		es: "Rapidash",
		it: "Rapidash",
		de: "Gallopa",
		'pt-br': "Rapidash",
		ko: "날쌩마"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",

	evolveFrom: {
		en: "Ponyta"
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Fire Mane",
			fr: "Crinière de Feu",
			es: "Crin de Fuego",
			it: "Criniera di Fuoco",
			de: "Flammenmähne",
			'pt-br': "Crina de Fogo",
			ko: "불꽃의갈기"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.",
		fr: "Ce Pokémon traverse les plaines à plus de 240 km/h,\nsa crinière flamboyante flottant au vent.",
		es: "Su ardiente crin ondea al viento mientras atraviesa\nextensas praderas a una velocidad de 240 km/h.",
		it: "Sfreccia nelle praterie a una velocità di 240 km/h,\nfacendo sventolare la sua criniera ardente.",
		de: "Die lodernde Mähne dieses Pokémon flattert im\nWind, wenn es mit einer Geschwindigkeit von\n240 km/h über Felder und Wiesen galoppiert.",
		'pt-br': "Este Pokémon pode ser encontrado galopando\nnas pradarias, com sua crina de fogo ao vento,\na velocidades de até 240 km/h.",
		ko: "불타는 갈기를 휘날리며\n시속 240km의 속도로\n넓은 초원을 달려나간다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
