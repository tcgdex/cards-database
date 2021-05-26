import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Sinistrail VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],

	evolveFrom: {
		fr: "Sinistrail-V"
	},

	attacks: [{
		name: {
			fr: "Chaîne Déchaînée"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de votre adversaire pour chaque Énergie Grass attachée à ce Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		cost: ["Grass"]
	}, {
		name: {
			fr: "Ancromax"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Ancromax."
		},

		damage: 240,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card