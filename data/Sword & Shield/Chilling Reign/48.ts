import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [180],
	set: Set,

	name: {
		en: "Flaaffy",
		fr: "Lainergie",
		es: "Flaaffy",
		it: "Flaaffy",
		pt: "Flaaffy",
		de: "Waaty"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	evolveFrom: {
		en: "Mareep",
		fr: "Wattouat",
		es: "Mareep",
		it: "Mareep",
		pt: "Mareep",
		de: "Voltilamm"
	},

	attacks: [{
		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
			es: "Bola Voltio",
			it: "Energisfera",
			pt: "Bola Elétrica",
			de: "Elektroball"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It stores electricity in its fluffy fleece. If it stores up too much, it will start to go bald in those patches."
	},

	thirdParty: {
		cardmarket: 567128,
		tcgplayer: 241705
	}
}

export default card