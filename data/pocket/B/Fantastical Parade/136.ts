import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [289],

	name: {
		'en-us': "Slaking"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Vigoroth"
	},

	description: {
		'en-us': "This Pokémon lives lying on its side. It only\nrolls over and moves when there is no more\ngrass to eat."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Snoozing Habit"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, whenever you attach an Energy from your Energy Zone to it, it is now Asleep."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Knuckle Sandwich"
		},

		damage: 150,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Discard a random Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 4
}

export default card