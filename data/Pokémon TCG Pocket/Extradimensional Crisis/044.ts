import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Poipole",
		fr: "Vémini"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "This Ultra Beast is well enough liked to be\nchosen as a first partner in its own world.",
		fr: "Dans son monde, cette Ultra-Chimère est fort appréciée pour son naturel conciliant, qui fait d'elle un compagnon de voyage idéal."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "2-Step",
			fr: "Two-Step"
		},

		damage: 20,
		cost: ["Darkness"],

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card