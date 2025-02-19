import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Tangrowth"
	},

	illustrator: "Saboteri",
	rarity: "One Star",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Tangela"
	},

	description: {
		en: "Tangrowth has two arms that it can extend as it<br />pleases. Recent research has shown that these<br />arms are, in fact, bundles of vines."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Mega Drain"
		},

		damage: 90,
		cost: ["Grass", "Grass", "Grass", "Colorless"],

		effect: {
			en: "Heal 30 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	
	boosters: [Dialga]
}

export default card