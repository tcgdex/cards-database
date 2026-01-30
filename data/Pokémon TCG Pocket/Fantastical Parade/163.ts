import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Aurorus"
	},

	illustrator: "sui",
	rarity: "One Star",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Amaura"
	},

	description: {
		en: "When gripped by rage, Aurorus will emanate\nfreezing air, covering everything around it in ice."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Hail Prison"
		},

		damage: 90,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "Discard Water2 {W} Energy from this Pokémon. Your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 3
}

export default card