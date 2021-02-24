import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Gorebyss",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		368,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Clamperl",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Reactive Booster",
			},
			effect: {
				en: "Each React Energy card attached to all of your Huntail and Gorebyss provides 2 Energy of every type but has no effect other than providing Energy.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
			},
			effect: {
				en: "Does 30 damage plus 20 more damage for each Water Energy attached to Gorebyss but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
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





}

export default card
