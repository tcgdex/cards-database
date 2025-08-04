import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Klang"
	},

	illustrator: "Akira Komayama",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	evolveFrom: {
		en: "Klink"
	},

	description: {
		en: "When Klang goes all out, the minigear links up\nperfectly with the outer part of the big gear, and\nthis Pokémon's rotation speed increases sharply."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gear Cutter"
		},

		damage: 40,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card