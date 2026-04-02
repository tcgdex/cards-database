import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Staryu",
		fr: "Stari",
		es: "Staryu",
		'es-mx': "Staryu",
		de: "Sterndu",
		it: "Staryu",
		pt: "Staryu"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			'es-mx': "Chorro de Agua",
			de: "Aquaknarre",
			it: "Pistolacqua",
			pt: "Revólver d'Água"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 684374,
		cardmarket: 877432
	}
}

export default card
