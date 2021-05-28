import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Vivillon",
		fr: "Prismillon"
	},

	illustrator: "miki kudo",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Spewpa",
		fr: "Pérégrain"
	},

	attacks: [{
		name: {
			en: "Vital Powder",
			fr: "Poudre Vitale"
		},

		effect: {
			en: "Heal all damage from 2 of your Benched Pokémon.",
			fr: "Soignez tous les dégâts de 2 de vos Pokémon de Banc."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Gust",
			fr: "Tornade"
		},

		damage: 90,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card