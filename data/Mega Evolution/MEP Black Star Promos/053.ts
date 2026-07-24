import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Scorbunny",
		fr: "Flambino"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	dexId: [813],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Double Kick",
			fr: "Double Pied"
		},

		damage: "20×",

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
