import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Luxray"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		en: "Luxio"
	},

	description: {
		en: "It can see clearly through walls to track down its prey and seek its lost young."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Volt Bolt"
		},

		cost: ["Lightning", "Lightning", "Lightning"],

		effect: {
			en: "Discard all <span class=\"energy-text energy-text--type-lightning\"></span> Energy from this Pokémon. This attack does 120 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0
}

export default card
