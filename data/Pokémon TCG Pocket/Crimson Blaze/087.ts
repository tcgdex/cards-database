import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [6],

	name: {
		en: "Mega Charizard Y ex"
	},

	illustrator: "Nurikabe",
	rarity: "Three Star",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	evolveFrom: {
		en: "Charmeleon"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Crimson Dive"
		},

		damage: 250,
		cost: ["Fire", "Fire", "Fire", "Colorless"],

		effect: {
			en: "This Pokémon also does 50 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card