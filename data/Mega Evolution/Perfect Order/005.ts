import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [496],

	name: {
		en: "Servine",
		fr: "Lianaja",
		es: "Servine",
		'es-mx': "Servine",
		de: "Efoserp",
		it: "Servine",
		pt: "Servine"
	},

	evolveFrom: {
		en: "Snivy",
		fr: "Vipélierre",
		es: "Snivy",
		'es-mx': "Snivy",
		de: "Serpifeu",
		it: "Snivy",
		pt: "Snivy",
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

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684401,
				cardmarket: 877417
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684401,
				cardmarket: 877417
			}
		}
	],

}

export default card
