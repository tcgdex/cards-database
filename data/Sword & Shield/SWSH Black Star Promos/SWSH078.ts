import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Orbeetle V",
		fr: "Astronelle V"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Strafe",
			fr: "Bombarder"
		},

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon contre l’un de vos Pokémon de Banc."
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			en: "Mysterious Wave",
			fr: "Onde Mystérieuse"
		},

		effect: {
			en: "This attack does 30 more damage for each Energy attached to your opponent’s Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire."
		},

		damage: "50+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card