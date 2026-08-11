import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Koffing",
		'fr-fr': "Smogo",
		'de-de': "Smogon"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [109],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Smokescreen",
				'fr-fr': "Brouillard",
				'de-de': "Rauchwolke"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaie d’attaquer pendant le prochain tour de votre adversaire, votre adversaire lance une pièce. Si c’est pile, cette attaque ne fait rien.",
				'de-de': "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Suffocating Gas",
				'fr-fr': "Gaz suffocant",
				'de-de': "Würgegas"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its thin, filmy body is filled with gases that cause constant sniffles, coughs and teary eyes."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86498,
				cardmarket: 279042
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86498,
				cardmarket: 279042
			}
		},
		{
			type: "normal",
			stamp: ["snowflake"],
			languages: ["de"],
		},
	],

}

export default card
