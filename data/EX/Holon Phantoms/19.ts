import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Bellossom δ",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		182,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Gloom",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fellowship",
			},
			effect: {
				en: "Bellossom can use the attacks of all Oddish, Gloom, Vileplume, Vileplume ex, or other Bellossom you have in play as its own. (You still need the necessary Energy to use each attack.)",
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
				en: "Aqua Flower",
			},
			effect: {
				en: "During your opponent's next turn, Bellossom has no Weakness.",
			},
			damage: 40,

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
