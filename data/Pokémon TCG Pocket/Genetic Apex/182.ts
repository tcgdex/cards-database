import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Melmetal"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Stage1",
	evolveFrom: {
		en: "Meltan"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Hard Coat"
		},

		effect: {
			en: "This Pokémon takes -20 damage from attacks."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			en: "Heavy Impact"
		},

		damage: "120"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	description: {
		en: "At the end of its life-span, Melmetal will rust and fall apart. The small shards left behind will eventually be reborn as Meltan.",
	}
}

export default card
