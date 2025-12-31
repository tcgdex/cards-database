import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Arcanine",
		de: "Arkani"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Growlithe",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Recharge",
				de: "Energy Recharge"
			},
			effect: {
				en: "When you play Arcanine from your hand to evolve your Active Pokémon, you may flip 3 coins. For each heads, choose a basic energy card from your discard pile and attach it to Arcanine.",
				de: "When your play Arcanine from your hand to evolve your Active Pokémon, you may flip 3 coins. For each heads, choose a basic Energy card from your discard pile and attach it to Arcanine."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shake",
				de: "Shake"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				de: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "White Flames",
				de: "White Flames"
			},
			effect: {
				en: "Discard all Energy cards attached to Arcanine.",
				de: "Discard all  Energy cards attached to Arcanine."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275227,
		tcgplayer: 83574
	},

	variants: [
		{
			type: 'holo',
		}
	]
}

export default card
