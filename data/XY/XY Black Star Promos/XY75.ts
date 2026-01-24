import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Palkia",
		fr: "Palkia",
	},

	illustrator: "Naoki Saito",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		484,
	],

	hp: 120,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Cross Slicer",
				fr: "Tranch'Croix"
			},
			effect: {
				en: "Your opponent can't attach Energy from his or her hand to the Defending Pokémon during his or her next turn.",
				fr: "Votre adversaire ne peut pas attacher d'Énergie de sa main au Pokémon Défenseur pendant son prochain tour."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 289798
	}
}

export default card
