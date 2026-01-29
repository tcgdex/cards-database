import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Wobbuffet"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		en: "To keep its pitch-black tail hidden, it lives quietly\nin the darkness. It is never first to attack."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flip Over"
		},

		damage: 80,
		cost: ["Psychic", "Colorless", "Colorless"],

		effect: {
			en: "This Pokémon also does 10 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card