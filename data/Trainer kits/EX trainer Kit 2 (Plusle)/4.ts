import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [52],
	set: Set,

	name: {
		en: "Meowth",
		fr: "Miaouss"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 50,

	types: [
		"Colorless",
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Collect",
			fr: "Collectionner"
		},
		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte."
		}
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Cat Kick",
			fr: "Coup d'patte"
		},
		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "2x"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 87319
	}
}

export default card
