import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Poipole",
		'fr-fr': "Vémini"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [803],
	hp: 60,
	types: ["Darkness"],

	description: {
		'en-us': "This Ultra Beast is well enough liked to be\nchosen as a first partner in its own world.",
		'fr-fr': "Dans son monde, cette Ultra-Chimère est fort appréciée pour son naturel conciliant, qui fait d'elle un compagnon de voyage idéal."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "2-Step",
			'fr-fr': "Two-Step"
		},

		damage: 20,
		cost: ["Darkness"],

		effect: {
			'en-us': "Flip 2 coins. This attack does 20 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card