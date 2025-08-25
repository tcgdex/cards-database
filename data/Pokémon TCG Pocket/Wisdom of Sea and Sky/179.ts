import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Tyranitar"
	},

	illustrator: "Saboteri",
	rarity: "One Star",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		en: "Pupitar"
	},

	description: {
		en: "Extremely strong, it can change the landscape.\nIt is so insolent that it doesn't care about others."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Energy Plunder"
		},

		effect: {
			en: "Once during your turn, you may move all {D} Energy from each of your Pokémon to this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Buster Tail"
		},

		damage: 130,
		cost: ["Darkness", "Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["ho-oh"]
}

export default card