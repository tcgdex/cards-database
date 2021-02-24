import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Spearow",
		fr: "Piafabec",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		21,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Roost",
				fr: "Atterrissage",
			},
			effect: {
				en: "Remove 4 damage counters from Spearow. Spearow can't retreat during your next turn.",
				fr: "Retirez 4 marqueurs de dégât à Piafabec. Piafabec ne peut pas battre en retraite pendant votre prochain tour.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flap",
				fr: "Battement",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
