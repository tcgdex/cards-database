import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Rapid Strike Urshifu V",
		fr: "Shifours Mille Poings V"
	},

	illustrator: "Ryota Murayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Strafe",
			fr: "Bombarder"
		},

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon contre l’un de vos Pokémon de Banc."
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			en: "Hundred Furious Blows",
			fr: "Multicoups Furieux"
		},

		damage: 150,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card