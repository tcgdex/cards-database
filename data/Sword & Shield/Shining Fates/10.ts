import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Sinistrail VMAX",
		en: "Dhelmise VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],

	evolveFrom: {
		fr: "Sinistrail-V",
		en: "Dhelmise V"
	},

	attacks: [{
		name: {
			fr: "Chaîne Déchaînée",
			en: "Swinging Chain"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de votre adversaire pour chaque Énergie Grass attachée à ce Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack does 30 damage to 1 of your opponent’s Pokémon for each Grass Energy attached to this Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)"
		},

		cost: ["Grass"]
	}, {
		name: {
			fr: "Ancromax",
			en: "Max Anchor"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Ancromax.",
			en: "During your next turn, this Pokémon can’t use Max Anchor."
		},

		damage: 240,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card