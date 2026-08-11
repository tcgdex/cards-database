import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Bastiodon GL",
		'fr-fr': "Bastiodon  Niv. 41",
		'de-de': "Bollterus GL"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [411],

	hp: 90,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bounce Back",
				'fr-fr': "Retour à l'envoyer",
				'de-de': "Zurückprallen"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc.",
				'de-de': "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Smack Attack",
				'fr-fr': "Claque-attaque",
				'de-de': "Klatsch-Attacke"
			},
			effect: {
				'en-us': "Remove 1 damage counter from Bastiodon GL.",
				'fr-fr': "Retirez à Bastiodon  1 marqueur de dégât.",
				'de-de': "Entferne 1 Schadensmarke von Bollterus GL."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278569,
				tcgplayer: 83738,
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278569,
				tcgplayer: 83738
			}
		},
	],

}

export default card
