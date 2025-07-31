import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Ho-Oh ex"
	},

	illustrator: "SIE NANAHARA",
	rarity: "Three Star",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Phoenix Turbo"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Take a {R}, {W}, and {L} Energy from your Energy Zone and attach them to your Benched Basic Pokémon in any way you like."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card