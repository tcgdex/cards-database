import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Mr. Mime",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		122,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Airy Wall",
			},
			effect: {
				en: "If your opponent's Pokémon that has 2 or less Energy cards attached to it attacks Mr. Mime, prevent all damage done to Mr. Mime from that attack. If Mime Jr. is anywhere under Mr. Mime, prevent all effects of that attack, including damage, done to Mr. Mime.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Trick Play",
			},
			effect: {
				en: "Put a coin next to your Active Pokémon without showing your opponent and cover it with your hand. Your opponent guesses if the coin is heads or tails. If he or she is wrong, this attack does 50 damage to the Defending Pokémon. If he or she is right, Mr. Mime does 20 damage to itself, and this attack's damage isn't affected by Weakness or Resistance.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],





}

export default card
