import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Tornadus",
		fr: "Boréas"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [641],
	hp: 110,
	types: ["Colorless"],
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
			en: "Corkscrew Dive",
			fr: "Plongée Tire-Bouchon"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "You may draw cards until you have 6 cards in your hand.",
			fr: "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main."
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	description: {
		en: "The lower half of its body is wrapped in a cloud of energy. It zooms through the sky at 200 mph.",
		fr: "Le bas de son corps est entouré d'une masse d'énergie semblable à un nuage. Il vole dans le ciel à 300 km/h."
	},

	variants: [
		{ type: "normal" },
		{ type: "reverse" }
	],
}

export default card
