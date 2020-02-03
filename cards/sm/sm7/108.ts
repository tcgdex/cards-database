import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-108",
	localId: 108,

	// Card informations
	name: {
		en: "Latios ◇",
		fr: "Latios ",
	},

	hp: 140,

	type: [
		Type.DRAGON,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/108/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/108/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/108/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/108/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Fleet",
			fr: "Flotte des Dragons",
		},
		text: {
			en: "This attack does 50 damage for each of your Evolution Dragon Pokémon in play.",
			fr: "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon Dragon évolués en jeu.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

