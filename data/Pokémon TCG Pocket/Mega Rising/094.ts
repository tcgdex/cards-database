import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Dedenne"
	},

	illustrator: "Yuka Morii",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [702],
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "Dedenne emit electrical waves from the whiskers\non their cheeks to communicate with each other.\nWhen low on electricity, they curl up and sleep."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Electric Nibbling"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "Discard a {L} Energy from your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card