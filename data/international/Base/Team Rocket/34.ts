import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Electrode",
		'fr-fr': "Electrode obscur",
		'de-de': "Dunkles Lektrobal"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rolling Tackle",
				'fr-fr': "Plaquage roulant",
				'de-de': "Rolling Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Energy Bomb",
				'fr-fr': "Bombe à Énergie",
				'de-de': "Energy Bomb"
			},
			effect: {
				'en-us': "Take all Energy cards attached to Dark Electrode and attach them to your Benched Pokémon (in any way you choose). If you have no Benched Pokémon, discard all Energy cards attached to Dark Electrode.",
				'fr-fr': "Prenez toutes les cartes Énergie attachées à Electrode obscur et attachez-les aux Pokémon de votre Banc (selon votre choix). Si vous n'avez pas Pokémon sur votre Banc, défaussez toutes les cartes Énergie attachées à Electrode obscur.",
				'de-de': "Take all Energy cards attached to Dark Electrode and attach them to your benched Pokémon (in any way you choose). If you have no Benched Pokémon, discard all Energy cards attached to Dark Electrode."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Some researchers hypothesize that Electrode may actually be a form of energy instead of having an actual body.",
		'fr-fr': "Certains chercheurs pensent que Electrode pourrait être une forme d'énergie au lieu de posséder un corps réel."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274087,
				tcgplayer: 84590
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274087,
				tcgplayer: 84590
			}
		}
	]
}

export default card
