import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [13],
	set: Set,

	name: {
		fr: "Aspicot",
		en: "Weedle",
		es: "Weedle",
		it: "Weedle",
		pt: "Weedle",
		de: "Hornliu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Collision",
			en: "Ram",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Piqûre",
			en: "Bug Bite",
			es: "Picadura",
			it: "Coleomorso",
			pt: "Picada",
			de: "Käferbiss"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733608,
				tcgplayer: 502562,
				cardtrader: 261158
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733608,
				tcgplayer: 502562,
				cardtrader: 261158
			}
		},
	],

	illustrator: "nisimono",

	
}

export default card
