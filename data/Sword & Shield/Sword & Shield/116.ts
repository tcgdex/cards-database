import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Stonjourner VMAX",
		fr: "Dolman VMAX",
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 330,

	types: [
		"Fightning",
	],

	evolveFrom: {
		en: "Stonjourner V",
		fr: "Dolman-V",
	},

	stage: "VMAX",

	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Stone Gift",
				fr: "Cadeau Roc",
			},
			effect: {
				en: "Attach a Fighting Energy card from your hand to 1 of your Pokémon. If you do, heal 120 damage from that Pokémon.",
				fr: "Attachez une carte Énergie Fighting de votre main à l’un de vos Pokémon. Dans ce cas, soignez 120 dégâts de ce Pokémon-là.",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Max Rockfall",
				fr: "Lithomax",
			},

			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
