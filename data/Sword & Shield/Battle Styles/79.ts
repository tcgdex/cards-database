import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Carkol",
		fr: "Wagomine"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rolycoly",
		fr: "Charbi"
	},

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Wild Tackle",
			fr: "Tacle Brutal"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s’inflige aussi 10 dégâts."
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card