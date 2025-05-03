import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Salandit"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		en: "It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Venoshock"
		},

		damage: "10+",
		cost: ["Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 40 more damage."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
