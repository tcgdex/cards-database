import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Volbeat",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,
	dexId: [
		313,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Uplifting Glow",
			},
			effect: {
				en: "As long as Illumise is in play, Volbeat's Retreat Cost is 0.",
			},
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	effect: {
		en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Asleep.",
	},


}

export default card
