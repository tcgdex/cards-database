import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "det1-5",
	localId: 5,

	// Card informations
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
	},

	hp: 180,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/det1/5/low",
			fr: "https://assets.tcgdex.net/fr/sm/det1/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/det1/5/high",
			fr: "https://assets.tcgdex.net/fr/sm/det1/5/high",
		},
	},

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	tags: [
		Tag.STAGE2,
	],





	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 70
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wild Tackle",
			fr: "Tacle Brutal",
		},
		text: {
			en: "This Pokémon does 50 damage to itself.",
			fr: "Ce Pokémon s’inflige 50 dégâts.",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Detective Pikachu",
		code: "det1"
	}
}

export default card
