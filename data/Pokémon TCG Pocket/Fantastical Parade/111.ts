import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Perrserker"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		en: "Galarian Meowth"
	},

	description: {
		en: "After many battles, it evolved dangerous\nclaws that come together to form daggers\nwhen extended."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Dig Up"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put 2 random Pokémon Tool cards from your discard pile into your hand."
		}
	}],

	attacks: [{
		name: {
			en: "Metal Claw"
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