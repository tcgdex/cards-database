import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine ex"
	},

	illustrator: "PLANETA Saito",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	evolveFrom: {
		en: "Growlithe"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Inferno Onrush"
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "This Pokémon also does 20 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Shiny"
}

export default card