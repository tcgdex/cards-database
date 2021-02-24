import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Blastoise ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		9,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wartortle",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Rain",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may attach a Water Energy card from your hand to 1 of your Pokémon. Put 1 damage counter on that Pokémon. This power can't be used if Blastoise ex is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hyper Whirlpool",
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, your opponent discards an Energy card attached to the Defending Pokémon.",
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





}

export default card
