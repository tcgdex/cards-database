import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Phanpy",
		fr: "Phanpy"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [231],
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "This Pokémon lives and nests on a riverbank.\nAfter playing in the mud, it won't be able to\nsettle down unless it washes its body.",
		fr: "Les Phanpy vivent dans les trous qu'ils creusent, près des rivières. Après avoir joué dans la boue, ils ont besoin de faire leur toilette pour se calmer."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flail",
			fr: "Gigotage"
		},

		cost: ["Fighting"],

		effect: {
			en: "This attack does damage to your opponent's Active Pokémon equal to the damage this Pokémon has on it.",
			fr: "Cette attaque inflige des dégâts au Pokémon Actif de votre adversaire égaux à ceux que ce Pokémon a déjà subis."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card