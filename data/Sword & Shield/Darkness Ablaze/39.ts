import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Milotic",
		fr: "Milobellus"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Feebas",
		fr: "Barpau"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bright Heal",
				fr: "Soin Lumineux"
			},
			effect: {
				en: "Once during your turn, you may heal 20 damage from each of your Pokémon.",
				fr: "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de chacun de vos Pokémon."
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
				en: "Surf",
				fr: "Surf"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
