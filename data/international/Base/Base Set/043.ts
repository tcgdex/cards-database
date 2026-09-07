
import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Abra",
		'fr-fr': "Abra",
		'de-de': "Abra",
		'it-it': "Abra"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		63,
	],

	hp: 30,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Psyshock",
				'fr-fr': "Choc Psy",
				'de-de': "Psychoschock",
				'it-it': "Psicoshock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon gelähmt.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon Difensore è paralizzato."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		'en-us': "Using its ability to read minds, it will identify impending danger and teleport to safety.",
		'fr-fr': "Son don de télépathie lui permet de sentir le danger et de se téléporter en lieu sûr.",
		'it-it': "Le sue abilità telepatiche gli consentono di individuare eventuali pericoli e teletrasportarsi al sicuro."
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273738,
				tcgplayer: 42386
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107040
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107040
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
