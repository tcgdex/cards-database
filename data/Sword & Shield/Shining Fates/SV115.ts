import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Hexadron V",
		en: "Falinks V"
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Escadron Mur de Fer",
			en: "Iron Defense Formation"
		},

		effect: {
			fr: "Tous vos Pokémon ayant « Hexadron » dans leur nom subissent 20 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
			en: "All of your Pokémon that have \"Falinks\" in their name take 20 less damage from your opponent’s attacks (after applying Weakness and Resistance)."
		}
	}],

	attacks: [{
		name: {
			fr: "Giga Impact",
			en: "Giga Impact"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			en: "During your next turn, this Pokémon can’t attack."
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