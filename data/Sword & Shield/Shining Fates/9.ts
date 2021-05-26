import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Sinistrail V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Colère Ancrée"
		},

		effect: {
			fr: "Si l’un de vos Pokémon Grass a été mis K.O. par les dégâts d’une attaque de votre adversaire lors de son dernier tour, cette attaque inflige 90 dégâts supplémentaires."
		},

		damage: "30+",
		cost: ["Grass"]
	}, {
		name: {
			fr: "Giga Marteau"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Giga Marteau."
		},

		damage: 200,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card