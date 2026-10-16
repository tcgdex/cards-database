import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Heat Rotom ex",
		fr: "Motisma Chaleur-ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [479],
	hp: 190,
	types: ["Fire"],

	stage: "Basic",
	suffix: "ex",

	attacks: [{
		name: {
			en: "Rewarm",
			fr: "Réchauffage"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "This attack does 30 damage for each Basic {R} Energy card in your discard pile. Then, shuffle those cards into your deck.",
			fr: "Cette attaque inflige 30 dégâts pour chaque carte Énergie {R} de base dans votre pile de défausse. Mélangez ensuite ces cartes avec votre deck."
		},

		damage: "30×"
	}, {
		name: {
			en: "Strong Flare",
			fr: "Flamboiement Intense"
		},

		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon."
		},

		damage: 170
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{ type: "holo" }
	],
}

export default card
