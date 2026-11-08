import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [863],

	name: {
		'en-us': "Galarian Perrserker"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "One Star",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Galarian Meowth"
	},

	description: {
		'en-us': "After many battles, it evolved dangerous\nclaws that come together to form daggers\nwhen extended."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dig Up"
		},

		effect: {
			'en-us': "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put 2 random Pokémon Tool cards from your discard pile into your hand."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Metal Claw"
		},

		damage: 70,
		cost: ["Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card