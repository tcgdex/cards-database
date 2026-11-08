import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Palkia",
		'fr-fr': "Palkia",
		'de-de': "Palkia"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [484],

	hp: 100,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Wormhole",
				'fr-fr': "Trou de ver",
				'de-de': "Wurmloch"
			},
			effect: {
				'en-us': "Switch Palkia with 1 of your Benched Pokémon. Then, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Échangez Palkia avec l’un des Pokémon de votre Banc. Ensuite, votre adversaire échange le Pokémon Défenseur avec l’un de ses Pokémon de Banc.",
				'de-de': "Tausche Palkia gegen 1 Pokémon auf deiner Bank aus. Danach tauscht dein Gegner das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 3,

	description: {
		'en-us': "Its total control over the boundaries of space enable it to transport itself to faraway places or even other dimensions.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87912,
				cardmarket: 279662
			},
		},
	],

}

export default card
