import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [579],

	name: {
		'en-us': "Reuniclus"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Duosion"
	},

	description: {
		'en-us': "It's said that drinking the liquid surrounding\nReuniclus grants wisdom. Problem is, the liquid is\nhighly toxic to anything besides Reuniclus itself."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Infinite Increase"
		},

		effect: {
			'en-us': "This Pokémon gets +30 HP for each {P} Energy attached to it."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Psypunch"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 3
}

export default card