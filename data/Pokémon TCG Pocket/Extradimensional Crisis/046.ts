import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Diglett"
	},

	illustrator: "Megumi Mizutani",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		en: "The metal-rich geology of this Pokémon's habitat<br />caused it to develop steel whiskers on its head."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Happened to Headbutt"
		},

		damage: 40,
		cost: ["Metal"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card