import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Light Vaporeon",
		'fr-fr': "Aquali lumineux",
		'de-de': "Helles Aquana"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Wash Away",
				'fr-fr': "Lavage",
				'de-de': "Wash Away"
			},
			effect: {
				'en-us': "If you have any Benched Pokémon, flip a coin. If heads, remove all damage counters from 1 of your Benched Pokémon and discard all Energy cards attached to it.",
				'fr-fr': "Si vous avez des Pokémon sur votre Banc, lancez une pièce. Si c'est face, retirez tous les marqueurs de dégâts d'un des Pokémon de votre Banc et défaussez-vous de toutes les cartes Énergie qui y sont attachées.",
				'de-de': "If you have any Benched Pokémon, flip a coin. If heads, remove all damage counters from 1 of your Benched Pokémon and discard all Energy cards attached to it."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Hypno Shower",
				'fr-fr': "Hypnodouche",
				'de-de': "Hypnoshower"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep. Remove 1 damage counter from each Benched Pokémon (yours and your opponent's) with any damage counters on it.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi. Retirez un marqueur de dégâts de chaque Pokémon du Banc (le vôtre et celui de votre adversaire) ayant des marqueurs de dégâts sur lui.",
				'de-de': "The Defending Pokémon is now Asleep. Remove 1 damage counter from each Benched Pokémon (yours and your opponent's) with any damage counters on it."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "If its fins being to vibrate, it is a sign that it will begin raining soon.",
		'fr-fr': "Si sa nageoire commence à vibrer, c'est signe qu'il va bientôt pleuvoir."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274704,
				tcgplayer: 86751
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274704,
				tcgplayer: 86751
			}
		}
	]
}

export default card
