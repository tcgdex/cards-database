import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Zarude",
		en: "Zarude"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Lianes Sangsues",
			en: "Suctioning Vines"
		},

		effect: {
			fr: "Soignez 30 dégâts de ce Pokémon.",
			en: "Heal 30 damage from this Pokémon."
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			fr: "Courroux de la Jungle",
			en: "Jungle Blast"
		},

		damage: 110,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card