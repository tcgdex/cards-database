import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Dusknoir"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Dusclops"
	},

	description: {
		en: "At the bidding of transmissions from the spirit world, it steals people and Pokémon away. No one knows whether it has a will of its own."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Shadow Void"
		},

		effect: {
			en: "As often as you like during your turn, you may choose 1 of your Pokémon that has damage on it, and move all of its damage to this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Devour Soul"
		},

		damage: 70,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card
