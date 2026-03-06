import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Charizard Y ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	evolveFrom: {
		en: "Charmeleon"
	},

	description: {
		en: "Its bond with its Trainer is the source of\nits power. It boasts speed and maneuverability\ngreater than that of a jet."
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