import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Corviknight V",
		fr: "Corvaillus V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Metal"],

	attacks: [{
		name: {
			en: "Clutch",
			fr: "Serre"
		},

		effect: {
			en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
		},

		damage: 30,
		cost: ["Metal"]
	}, {
		name: {
			en: "Sky Hurricane",
			fr: "Vent Violent Céleste"
		},

		effect: {
			en: "During your next turn, this Pokémon can’t use Sky Hurricane.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Vent Violent Céleste."
		},

		damage: 190,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1
}

export default card