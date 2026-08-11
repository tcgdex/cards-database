import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Ekans",
		'fr-fr': "Abo",
		'de-de': "Rettan"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		23,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Spit Poison",
				'fr-fr': "Crache-venin",
				'de-de': "Giftspucke"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt vergiftet."
			},

		},
		{
			cost: [
				"Colorless",
				"Grass",
			],
			name: {
				'en-us': "Wrap",
				'fr-fr': "Ligotage",
				'de-de': "Wickel"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt."
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
		'en-us': "Moves silently and stealthily. Eats the eggs of birds such as Pidgey and Spearow whole.",
		'fr-fr': "Il se déplace en silence pour dévorer des œufs de Roucool ou de Piafabec."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273907,
				tcgplayer: 44448
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273907,
				tcgplayer: 44448
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
