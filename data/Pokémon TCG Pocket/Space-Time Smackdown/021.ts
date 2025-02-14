import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga, Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Mow Rotom"
	},

	illustrator: "kawayoo",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		en: "The lawn mower is one of the household<br />appliances that led to the development of<br />the Rotom Dex."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Energy Cutoff"
		},

		damage: 30,
		cost: ["Grass", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	
	boosters: [Dialga, Palkia]
}

export default card