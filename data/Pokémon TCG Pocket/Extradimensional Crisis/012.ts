import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Sharpedo"
	},

	illustrator: "Yumi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Carvanha"
	},

	description: {
		en: "As soon as it catches the scent of prey, Sharpedo<br />will jet seawater from its backside, hurtling<br />toward the target to attack at 75 mph."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Crunch"
		},

		damage: 50,
		cost: ["Water", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card