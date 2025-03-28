import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Paldean Clodsire ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		en: "Paldean Wooper"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Venoshock"
		},

		damage: 60,
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card