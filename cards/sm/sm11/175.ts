import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-175",
	localId: 175,

	// Card informations
	name: {
		en: "Tranquill",
		fr: "Colombeau",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 520,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/175/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/175/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/175/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/175/high.png",
		},
	},

	evolveFrom: {
		en: "Pidove",
		fr: "Poichigeon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 89,
		name: "Sekio"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Glide",
			fr: "Glissement",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Air Slash",
			fr: "Lame d’Air",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

