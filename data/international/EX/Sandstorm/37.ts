import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Fearow",
		'fr-fr': "Rapasdepic",
		'de-de': "Ibitak"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [22],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Spearow",
		'fr-fr': "Piafabec"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Wing Attack",
				'fr-fr': "Double cru-aile",
				'de-de': "Double Wing Attack"
			},
			effect: {
				'en-us': "Does 20 damage to each Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts à chaque Pokémon Défenseur.",
				'de-de': "Does 20 damage to each Defending Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rend",
				'fr-fr': "Déchirure",
				'de-de': "Rend"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any damage counters on it, this attack does 30 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède des marqueurs de dégât, cette attaque inflige 50 dégâts.",
				'de-de': "If the Defending Pokémon has any damage counters on it, this attack does 30 damage plus 20 more damage."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275814,
				tcgplayer: 85394
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275814,
				tcgplayer: 85394
			}
		},
	],

}

export default card
