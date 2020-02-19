import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-54",
	localId: 54,

	// Card informations
	name: {
		en: "Skorupi",
		fr: "Rapion",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 451,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/54/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/54/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/54/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/54/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 66,
		name: "Misa Tsutsui"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hone Claws",
			fr: "Aiguisage",
		},
		text: {
			en: "During your next turn, this Pokémon's Pierce attack's base damage is 90.",
			fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Transpercement de ce Pokémon sont de 90.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Pierce",
			fr: "Transpercement",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

