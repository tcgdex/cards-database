import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'de-de': "Vulnona"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [38],

	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Mislead",
				'fr-fr': "Tromperie",
				'de-de': "Mislead"
			},
			effect: {
				'en-us': "Flip 2 coins. If either of them is heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez au moins une face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip 2 coins. If either of them is heads, the Defending Pokémon is now Confused."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ethereal Flame",
				'fr-fr': "Flamme éthérée",
				'de-de': "Ethereal Flame"
			},
			effect: {
				'en-us': "Discard all Fire Energy cards attached to Ninetales. This attack does 30 damage plus 20 more damage for each card discarded this way.",
				'fr-fr': "Défaussez-vous de toutes les cartes Énergie  attachées à Feunard. Cette carte inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque carte défaussée de cette manière.",
				'de-de': "Discard all  Energy cards attached to Ninetales. This attack does 30 damage plus 20 more damage for each card discarded this way."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87766,
				cardmarket: 274896
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87766,
				cardmarket: 274896
			},
		},
	],
}

export default card
