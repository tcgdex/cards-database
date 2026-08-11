import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Arceus",
		'fr-fr': "Arceus",
		'de-de': "Arceus"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [493],

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
				'en-us': "Metal Barrier",
				'fr-fr': "Barrière métallique",
				'de-de': "Metallbarriere"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to Arceus by Pokémon LV.X during your opponent's next turn.",
				'fr-fr': "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Arceus par des Pokémon NIV.X lors du prochain tour de votre adversaire.",
				'de-de': "Verhindere während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die Arceus von gegnerischen Pokémon LV.X zugefügt würden."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is described in mythology as the Pokémon that shaped the universe with its 1,000 arms."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278861,
				tcgplayer: 83600
			}
		}
	]
}

export default card
