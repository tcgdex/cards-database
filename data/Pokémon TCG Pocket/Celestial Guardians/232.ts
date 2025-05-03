import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Blastoise ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	evolveFrom: {
		en: "Wartortle"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Surf"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			en: "Hydro Bazooka"
		},

		damage: "100+",
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "If this Pokémon has at least 2 extra Water Energy attached, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card
