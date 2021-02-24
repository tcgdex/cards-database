import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Azumarill",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		184,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Marill",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Bubble Turn",
			},
			effect: {
				en: "Once during your turn (before your attack), if Azumarill is on your bench, you may flip a coin. If heads, return Azumarill and all cards attached to it to your hand.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Sonic",
			},
			effect: {
				en: "Don't apply Resistance.",
			},
			damage: 40,

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
