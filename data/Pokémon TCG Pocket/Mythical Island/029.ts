import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Galvantula"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	evolveFrom: {
		en: "Joltik"
	},

	description: {
		en: "It launches electrified fur from its abdomen as its<br />means of attack. Opponents hit by the fur could<br />be in for three full days and nights of paralysis."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Electroweb"
		},

		damage: 70,
		cost: ["Lightning", "Lightning"],

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card