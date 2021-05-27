import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Spewpa",
		fr: "Pérégrain"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Scatterbug",
		fr: "Lépidonille"
	},

	attacks: [{
		name: {
			en: "Grass Cocooning",
			fr: "Cocon Vert"
		},

		effect: {
			en: "Heal 40 damage from this Pokémon.",
			fr: "Soignez 40 dégâts de ce Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Bug Bite",
			fr: "Piqûre"
		},

		damage: 40,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card