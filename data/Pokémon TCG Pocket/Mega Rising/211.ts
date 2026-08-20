import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Wooloo",
		fr: "Moumouton"
	},

	illustrator: "Yoko Hishida",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [831],
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "If its fleece grows too long, Wooloo won't be\nable to move. Cloth made with the wool of this\nPokémon is surprisingly strong."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Continuous Tumble",
			fr: "Roulade Continue"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin until you get tails. This attack does 40 damage for each heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 40 dégâts pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card