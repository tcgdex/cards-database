import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Nidorino",
		'fr-fr': "Nidorino",
		'de-de': "Nidorino"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		33,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Nindoran ♂",
		'fr-fr': "Nidoran"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Stab",
				'fr-fr': "Coup double",
				'de-de': "Double Stab"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 20 damage times the number of heads."
			},
			damage: "20x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rend",
				'fr-fr': "Déchirer",
				'de-de': "Rend"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, this attack does 30 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque lui inflige 30 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon already has any damage counters on it, this attack does 30 damage plus 30 more damage."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276217,
				tcgplayer: 87744
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276217,
				tcgplayer: 87744
			},
		},
	],
}

export default card
