import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Chespin",
		fr: "Marisson"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [650],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Pin Missile",
			fr: "Dard-Nuée"
		},

		damage: "10×",

		effect: {
			en: "Flip 4 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card
