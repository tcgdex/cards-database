import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Mimikyu ex"
	},

	illustrator: "Mori Yuu",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Disguise"
		},

		effect: {
			en: "When this Pokémon is first damaged by an attack after coming into play, prevent that damage."
		}
	}],

	attacks: [{
		name: {
			en: "Claw Slash"
		},

		damage: 70,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card