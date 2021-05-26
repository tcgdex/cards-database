import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Lurantis",
		fr: "Floramantis"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Fomantis",
		fr: "Mimantis"
	},

	attacks: [{
		name: {
			en: "Leaf Drain",
			fr: "Feuille Sangsue"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon."
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			en: "Solar Cutter",
			fr: "Coupe Solaire"
		},

		damage: 70,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card