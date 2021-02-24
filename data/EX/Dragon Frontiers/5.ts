import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Milotic δ",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		350,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Feebas",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Sharing",
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at your opponent's hand. You may use the effect of a Supporter card you find there as the effect of this power. (The Supporter card remains in your opponent's hand.) You can't use more than 1 Sharing Poké-Power each turn. This power can't be used if Milotic is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare",
			},

			damage: 60,

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
