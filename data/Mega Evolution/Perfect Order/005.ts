import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Servine",
		fr: "Lianaja",
		es: "Servine",
		'es-mx': "Servine",
		de: "Efoserp",
		it: "Servine",
		pt: "Servine"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Solar Cutter",
			fr: "Coupe Solaire",
			es: "Corte Solar",
			'es-mx': "Corte Solar",
			de: "Solarschneider",
			it: "Taglio Solare",
			pt: "Cortador Solar"
		},

		damage: 40
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
		tcgplayer: 684401,
		cardmarket: 877417
	}
}

export default card
