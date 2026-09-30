import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Druddigon",
		fr: "Drakkarmin"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [621],
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Drag Off",
			fr: "Traîne"
		},

		cost: ["Fire", "Water"],

		effect: {
			en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. This attack does 40 damage to the new Active Pokémon.",
			fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Cette attaque inflige 40 dégâts au nouveau Pokémon Actif."
		}
	}, {
		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		damage: 80
	}],

	retreat: 2,
	regulationMark: "J",

	description: {
		en: "Druddigon lives in caves, but it never skips sunbathing—it won't be able to move if its body gets too cold.",
		fr: "Il vit sous terre, mais il doit impérativement s'exposer au soleil, car il devient incapable de bouger lorsque son corps se refroidit."
	},

	variants: [
		{ type: "normal" },
		{ type: "reverse" }
	],
}

export default card
