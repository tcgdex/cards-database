import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Indeedee"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		en: "This Pokémon never leaves its Trainer's side.\nIt predicts their actions with its psychic power\nand takes care of their day-to-day needs."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Zen Shard"
		},

		cost: ["Psychic", "Psychic", "Psychic"],

		effect: {
			en: "This attack does 70 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card