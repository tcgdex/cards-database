import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Wigglytuff ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Jigglypuff"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Sleepy Song"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card