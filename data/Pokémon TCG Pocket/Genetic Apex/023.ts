import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggutor ex",
		fr: "Noadkoko ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Exeggcute"
	},
	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Tropical Swing",
			fr: "Coup Tropical"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts de plus."
		},

		damage: "40+"
	}],
	suffix: "EX",

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Four Diamond"
}

export default card
