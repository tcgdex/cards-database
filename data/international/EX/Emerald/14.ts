import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Groudon",
		'fr-fr': "Groudon",
		'de-de': "Groudon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		383,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Slash"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Eruption",
				'fr-fr': "Éruption",
				'de-de': "Eruption"
			},
			effect: {
				'en-us': "Each player discards the top card of his or her deck. This attack does 40 damage plus 20 more damage for each Energy card discarded in this way.",
				'fr-fr': "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
				'de-de': "Each Player discards the top card of his or her deck. This attack does 40 damage plus 10 more for each energie discarded in this way."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 85923,
		cardmarket: 276525
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85923,
				cardmarket: 276525
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 85923,
				cardmarket: 276525
			},
		}
	],
}

export default card
