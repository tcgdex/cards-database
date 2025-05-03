import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Infernape ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		en: "Monferno"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Flare Blitz"
		},

		damage: 140,
		cost: ["Fire", "Fire"],

		effect: {
			en: "Discard all <span class=\"energy-text energy-text--type-fire\"></span> Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 0
}

export default card