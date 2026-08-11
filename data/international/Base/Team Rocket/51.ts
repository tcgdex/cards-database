import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Raticate",
		'fr-fr': "Rattatac obscur",
		'de-de': "Dunkles Rattikarl"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Rattata",
		'fr-fr': "Rattata"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Machouille",
				'de-de': "Nagen"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Hyper Fang",
				'fr-fr': "Croc de mort",
				'de-de': "Hyperzahn"
			},

			effect: {
				'en-us': "Flip a coin. if tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Wirf eine Münze. Bei 'Zahl' fügt dieser Angriff keine Schadenspunkte zu."
			},

			damage: 50
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "A Raticate's front teeth are incredibly powerful; it can destroy a two-story house with them in 5 minutes.",
		'fr-fr': "Les incisives d'un Rattatac sont incroyablement puissantes ; grâce à elle, il est capable de détruire une maison de 2 étages en 5 minutes."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274104,
				tcgplayer: 84649
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274104,
				tcgplayer: 84649
			}
		}
	]
}

export default card
