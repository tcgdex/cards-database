import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Spearow",
		fr: "Piafabec",
		de: "Habitak"
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
				en: "Peck",
				fr: "Picpic",
				de: "Schnabel"
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
				en: "Mirror Move",
				fr: "Mimique",
				de: "Spiegeltrick"
			},
			effect: {
				en: "If Spearow was attacked last turn, do the final result of that attack on Spearow to the Defending Pokémon.",
				fr: "Si Piafabec a été attaqué durant le tour précédent, infligez le résultat final de cette attaque sur Piafabec au Pokémon Défenseur.",
				de: "Falls Habitak im letzten Zug angegriffen wurde, füge dem verteidigenden Pokémon Schadenspunkte in Höhe der Endstärke dieses Angriffs und ausserdem alle Auswirkungen, die dieser Angriff auf Habitak hatte, zu."
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
		en: "Eats bugs in grassy areas. It has to flap its short wings at high speeds to stay airborne.",
		fr: "Il chasse les insectes dans les hautes herbes. Ses petites ailes lui permettent de voler très vite.",
		de: "Frißt in grasbedeckten Gegenden Käfer. Es muß seine kurzen Flügel schnell schlagen, um in der Luft zu bleiben."
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
