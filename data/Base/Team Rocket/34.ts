import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Electrode",
		fr: "Electrode obscur"
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
		en: "Voltorb",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rolling Tackle",
				fr: "Plaquage roulant"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Energy Bomb",
				fr: "Bombe à Énergie"
			},
			effect: {
				en: "Take all Energy cards attached to Dark Electrode and attach them to your Benched Pokémon (in any way you choose). If you have no Benched Pokémon, discard all Energy cards attached to Dark Electrode.",
				fr: "Prenez toutes les cartes Énergie attachées à Electrode obscur et attachez-les aux Pokémon de votre Banc (selon votre choix). Si vous n'avez pas Pokémon sur votre Banc, défaussez toutes les cartes Énergie attachées à Electrode obscur."
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

	description: {
		fr: "Certains chercheurs pensent que Electrode pourrait être une forme d'énergie au lieu de posséder un corps réel."
	}
}

export default card
