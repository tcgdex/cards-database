import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Pawmot"
	},

	illustrator: "Saboteri",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	evolveFrom: {
		en: "Pawmo"
	},

	description: {
		en: "This Pokémon normally is slow to react, but once it enters battle, it will strike down its enemies with lightning-fast movements."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Counterattack"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Electric Punch"
		},

		damage: 70,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0
}

export default card