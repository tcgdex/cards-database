import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Cinderace",
		fr: "Pyrobut"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		en: "Raboot",
		fr: "Lapyro"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Crisis Power",
			fr: "Puissance In Extremis"
		},

		effect: {
			en: "This Pokémon’s attacks do 30 more damage to your opponent’s Active Pokémon for each Prize card your opponent has taken (before applying Weakness and Resistance).",
			fr: "Les attaques de ce Pokémon infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire pour chaque carte Récompense que votre adversaire a récupérée (avant application de la Faiblesse et de la Résistance)."
		}
	}],

	attacks: [{
		name: {
			en: "Fireball Shot",
			fr: "Tir Boule de Feu"
		},

		effect: {
			en: "During your next turn, this Pokémon can’t attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer."
		},

		damage: 150,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card