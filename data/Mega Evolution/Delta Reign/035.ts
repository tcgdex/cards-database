import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Thundurus",
		fr: "Fulguris"
	},

	illustrator: "Takumi Wada",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [642],
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Incarnate Solidarity",
			fr: "Solidarité d'Avatar"
		},

		effect: {
			en: "If you have Tornadus, Thundurus, Landorus, and Enamorus in play, ignore all {C} Energy in the costs of attacks used by this Pokémon.",
			fr: "Si vous avez Boréas, Fulguris, Démétéros et Amovénus en jeu, ignorez toutes les Énergies {C} dans le coût des attaques utilisées par ce Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Thunderous Edge",
			fr: "Avantage Foudroyant"
		},

		cost: ["Lightning", "Colorless", "Colorless"],

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire."
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	description: {
		en: "As it flies around, it shoots lightning all over the place and causes forest fires. It is therefore disliked.",
		fr: "Il vole dans le ciel d'Unys et fait tomber des éclairs, provoquant des incendies qui font sa mauvaise réputation."
	},

	variants: [
		{ type: "normal" },
		{ type: "reverse" }
	],
}

export default card
