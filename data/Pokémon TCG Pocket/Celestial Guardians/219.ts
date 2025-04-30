import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Starmie"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Staryu"
	},

	description: {
		en: "This Pokémon has an organ known as its core. The organ glows in seven colors when Starmie is unleashing its potent psychic powers."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Wave Splash"
		},

		damage: 40,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0
}

export default card