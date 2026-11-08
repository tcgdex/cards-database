import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Duskull",
		'fr-fr': "Skelenox",
		'de-de': "Zwirrlicht"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [355],

	hp: 40,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Haunt",
				'fr-fr': "Hanter",
				'de-de': "Haunt"
			},
			effect: {
				'en-us': "Put 1 damage counter on the Defending Pokémon.",
				'fr-fr': "Placez un marqueur de dégât sur le Pokémon Défenseur.",
				'de-de': "Put 1 damage counter on the Defending Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Mind",
				'fr-fr': "Sombre-esprit",
				'de-de': "Dark Mind"
			},
			effect: {
				'en-us': "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à un des Pokémon du Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc).",
				'de-de': "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275839,
				tcgplayer: 85045
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275839,
				tcgplayer: 85045
			}
		},
	],

}

export default card
