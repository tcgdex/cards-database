import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Dodrio",
		fr: "Dodrio",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		85,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Doduo",
		fr: "Doduo",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Echo Draw",
				fr: "Pioche renvoi",
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card. This power can't be used if Dodrio is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez piocher une carte. Ce pouvoir ne peut pas être utilisé si Dodrio est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drill Peck",
				fr: "Bec vrille",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
