import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Hexadron V"
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Escadron Mur de Fer"
		},

		effect: {
			fr: "Tous vos Pokémon ayant « Hexadron » dans leur nom subissent 20 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance)."
		}
	}],

	attacks: [{
		name: {
			fr: "Giga Impact"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer."
		},

		damage: 210,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card