import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Krokorok",
		fr: "Escroco",
		es: "Krokorok",
		'es-mx': "Krokorok",
		de: "Rokkaiman",
		it: "Krokorok",
		pt: "Krokorok"
	},

	evolveFrom: {
		en: "Sandile",
		fr: "Mascaïman",
		es: "Sandile",
		'es-mx': "Sandile",
		de: "Ganovil",
		it: "Sandile",
		pt: "Sandile",
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [552],
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			'es-mx': "Mordida",
			de: "Biss",
			it: "Morso",
			pt: "Mordida"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Confront",
			fr: "Confrontation",
			es: "Confrontar",
			'es-mx': "Confrontar",
			de: "Konfrontieren",
			it: "Confronto",
			pt: "Confrontar"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		en: "Protected by thin membranes, their eyes can see even in the dead of night. They live in groups of a few individuals.",
	},

	illustrator: "Uninori",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857640,
				tcgplayer: 662173,
				cardtrader: 356849
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857640,
				tcgplayer: 662173,
				cardtrader: 356849
			}
		},
	],
}

export default card
