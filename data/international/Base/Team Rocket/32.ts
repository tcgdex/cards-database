import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Charmeleon",
		'fr-fr': "Reptincel Obscur",
		'de-de': "Dunkles Glutexo"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		5,
	],

	hp: 50,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Slap",
				'fr-fr': "Coud'keu",
				'de-de': "Schweifschlag"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],

			name: {
				'en-us': "Fireball",
				'fr-fr': "Boule de feu",
				'de-de': "Feuerball"
			},

			effect: {
				'en-us': "Use this attack only if there are any Energy cards attached to Dark Charmeleon. Flip a coin. If heads, discard 1 of those Energy cards. If tails, this attack does nothing (not even damage).",
				'fr-fr': "N'utilisez cette attaque que si des Énergies  sont attachées à Reptincel Obscur. Lancez une pièce. Si c'est face, défaussez 1 de ces cartes Énergies. Si c'est pile, cette attaque ne fait rien (pas même de dégâts).",
				'de-de': "Diesen Angriff nur spielen, wenn -Energiekarten auf Dunkles Glutexo abgelegt sind. Wirf eine Münze. Entferne bei 'Kopf' eine dieser Energiekarten. Bei 'Zahl' richtet dieser Angriff nichts aus (nicht einmal Schadenspunkte)."
			},

			damage: 70
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Its tail is incredibly strong, able to lift up to 5 adult men.",
		'fr-fr': "Sa queue incroyablement puissante est capable de soulever 5 hommes."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274085,
				tcgplayer: 84574
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274085,
				tcgplayer: 84574
			}
		},
		{
			type: "normal",
			stamp: ["w-promo"]
		}
	]
}

export default card
