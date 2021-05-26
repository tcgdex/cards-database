import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	set: Set,

	name: {
		fr: "Astronelle VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],

	evolveFrom: {
		fr: "Astronelle-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Faisceau Étrange"
		},

		effect: {
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez placer un marqueur de dégâts sur chacun des Pokémon de votre adversaire."
		}
	}],

	attacks: [{
		name: {
			fr: "Onde G-Max"
		},

		effect: {
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire."
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