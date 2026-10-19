import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Landorus",
		fr: "Démétéros"
	},

	illustrator: "Oku",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [645],
	hp: 130,
	types: ["Fighting"],
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
			en: "Gaia Crush",
			fr: "Anéantissement de Gaïa"
		},

		cost: ["Fighting", "Colorless", "Colorless"],

		effect: {
			en: "Discard a Stadium in play.",
			fr: "Défaussez un Stade en jeu."
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	description: {
		en: "Lands visited by Landorus grant such bountiful crops that it has been hailed as \"The Guardian of the Fields.\"",
		fr: "Il fait fructifier les cultures partout où il passe, c'est pourquoi on l'appelle « le dieu des moissons »."
	},

	variants: [
		{ type: "normal" },
		{ type: "reverse" }
	],
}

export default card
