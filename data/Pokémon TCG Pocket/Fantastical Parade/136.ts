import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Slaking"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	evolveFrom: {
		en: "Vigoroth"
	},

	description: {
		en: "This Pokémon lives lying on its side. It only\nrolls over and moves when there is no more\ngrass to eat."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Snoozing Habit"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, whenever you attach an Energy from your Energy Zone to it, it is now Asleep."
		}
	}],

	attacks: [{
		name: {
			en: "Knuckle Sandwich"
		},

		damage: 150,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Discard a random Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 4
}

export default card