import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Spearow",
		'fr-fr': "Piafabec",
		'de-de': "Habitak"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		21,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'de-de': "Schnabel"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mirror Move",
				'fr-fr': "Mimique",
				'de-de': "Spiegeltrick"
			},
			effect: {
				'en-us': "If Spearow was attacked last turn, do the final result of that attack on Spearow to the Defending Pokémon.",
				'fr-fr': "Si Piafabec a été attaqué durant le tour précédent, infligez le résultat final de cette attaque sur Piafabec au Pokémon Défenseur.",
				'de-de': "Falls Habitak im letzten Zug angegriffen wurde, füge dem verteidigenden Pokémon Schadenspunkte in Höhe der Endstärke dieses Angriffs und ausserdem alle Auswirkungen, die dieser Angriff auf habitak hatte, zu."
			},

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

	description: {
		'en-us': "Eats bugs in grassy areas. It has to flap its short wings at high speeds to stay airborne.",
		'fr-fr': "Il chasse les insectes dans les hautes herbes. Ses petites ailes lui permettent de voler très vite."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273859,
				tcgplayer: 45165
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273859,
				tcgplayer: 45165
			}
		}
	],
}

export default card
