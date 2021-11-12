import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Hoppip",
		fr: "Granivol"
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		187,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Lightweight",
				fr: "Poids-plume"
			},
			effect: {
				en: "You pay Colorless less to retreat Hoppip for each Grass Energy attached to it.",
				fr: "Vous payez  de moins pour faire battre Granivol en retraite pour chaque Énergie  qui lui est attachée."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Careless Tackle",
				fr: "Plaquage imprudent"
			},
			effect: {
				en: "Hoppip does 10 damage to itself.",
				fr: "Granivol s'inflige 30 dégâts."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],




}

export default card
