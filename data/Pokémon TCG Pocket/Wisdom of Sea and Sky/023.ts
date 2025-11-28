import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Cherubi",
		fr: "Ceribou"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [420],
	hp: 50,
	types: ["Grass"],

	description: {
		en: "It nimbly dashes about to avoid getting pecked\nby bird Pokémon that would love to make off\nwith its small, nutrient-rich storage ball.",
		fr: "Il s'enfuit à la vue des Pokémon oiseaux, dont le mets favori est sa petite boule remplie de nutriments."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "En-fruits-iastic",
			fr: "Fruitastique"
		},

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, attacks used by this Pokémon cost 1 less {G} Energy.",
			fr: "Si un Outil Pokémon est attaché à ce Pokémon, les attaques utilisées par ce Pokémon coûtent une Énergie {G} de moins."
		}
	}],

	attacks: [{
		name: {
			en: "Sweets Relay",
			fr: "Saupoudrage Sucré"
		},

		damage: 10,
		cost: ["Grass"],

		effect: {
			en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 20 more damage.",
			fr: "Si un de vos Pokémon a utilisé  lors de votre dernier tour, cette attaque inflige 20 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card