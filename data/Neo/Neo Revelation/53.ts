import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Slugma",
		fr: "Limagma",
		de: "Schneckmag"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		218,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flare",
				fr: "Souffle-feu",
				de: "Flackern"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Magma Ring",
				fr: "Anneau magma",
				de: "Magmaring"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
				de: "Das verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Il ne dort jamais. Il doit bouger sans cesse sinon son corps de magma refroidirait et durcirait."
	},

	thirdParty: {
		cardmarket: 274639
	}
}

export default card
