import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-115",
	localId: 115,

	// Card informations
	name: {
		en: "Larvitar",
		fr: "Embrylex",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 246,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/115/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/115/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/115/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 102,
		name: "SATOSHI NAKAI"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Second Strike",
			fr: "Deuxième Coup",
		},
		text: {
			en: "If your opponent's Active Pokémon already has 3 or more damage counters on it, this attack does 70 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà 3 marqueurs de dégâts ou plus, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
