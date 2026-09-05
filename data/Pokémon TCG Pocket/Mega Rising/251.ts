import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Pinsir ex",
		fr: "Méga-Scarabrute-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [127],
	hp: 170,
	types: ["Grass"],

	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Critical Scissors",
			fr: "Ciseaux Acérés"
		},

		damage: 80,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 70 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 70 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-blaziken"]
}

export default card