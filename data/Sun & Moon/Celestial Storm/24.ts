import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Magcargo",
		fr: "Volcaropod",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		219,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Smooth Over",
				fr: "Aplanir",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a card, shuffle your deck, then put that card on top of it.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte dans votre deck, mélanger votre deck, puis placer cette carte sur le dessus.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
