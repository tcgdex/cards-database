import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Celebi ex",
		fr: "Celebi-ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",

	dexId: [251],
	hp: 130,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Powerful Bloom",
			fr: "Éclosion Éclatante"
		},

		damage: 50,
		cost: ["Grass", "Colorless"],

		effect: {
			en: "Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 50 dégâts pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Shiny"
}

export default card