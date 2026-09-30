import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		fr: "Arcanin"
	},

	illustrator: "Felicia Chen",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [59],
	hp: 150,
	types: ["Fire"],
	stage: "Stage1",

	evolveFrom: {
		fr: "Caninos"
	},

	attacks: [{
		name: {
			fr: "Croc Enthousiaste"
		},

		cost: ["Fire", "Colorless", "Colorless"],

		effect: {
			fr: "S'il reste 4 cartes Récompense ou moins à votre adversaire, cette attaque inflige 90 dégâts supplémentaires."
		},

		damage: "90+"
	}, {
		name: {
			fr: "Charge Énergétique"
		},

		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		effect: {
			fr: "Ce Pokémon s'inflige aussi 50 dégâts."
		},

		damage: 200
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",

	description: {
		fr: "Son aboiement est tout simplement majestueux. On ne peut que se prosterner à ses pieds après l'avoir entendu."
	},

	variants: [
		{ type: "holo" },
		{ type: "reverse" }
	],
}

export default card
