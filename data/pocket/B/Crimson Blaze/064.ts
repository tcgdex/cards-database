import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [626],

	name: {
		'en-us': "Bouffalant"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'en-us': "These Pokémon live in herds of about 20\nindividuals. Bouffalant that betray the herd will\nlose the hair on their heads for some reason."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Revenge"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 40 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card