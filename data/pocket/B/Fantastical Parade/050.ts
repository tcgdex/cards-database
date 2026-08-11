import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [26],

	name: {
		'en-us': "Alolan Raichu"
	},

	illustrator: "Akira Komayama",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Pikachu"
	},

	description: {
		'en-us': "This Pokémon rides on its tail while it uses\nits psychic powers to levitate. It attacks with\nstar-shaped thunderbolts."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Surge Surfer"
		},

		effect: {
			'en-us': "If a Stadium is in play, this Pokémon has no Retreat Cost."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Thunder Spear"
		},

		cost: ["Lightning", "Lightning"],

		effect: {
			'en-us': "This attack does 50 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card