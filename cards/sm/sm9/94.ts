import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-94",
	localId: 94,

	// Card informations
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
	},

	hp: 140,

	type: [
		Type.DARKNESS,
	],

	dexId: 675,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/94/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/94/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/94/high",
		},
	},

	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 77,
		name: "Satoshi Shirai"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tighten Up",
			fr: "Resserrage",
		},
		text: {
			en: "Your opponent discards 2 cards from their hand.",
			fr: "Votre adversaire défausse 2 cartes de sa main.",
		},
		damage: 60
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tantrum",
			fr: "Mauvaise Humeur",
		},
		text: {
			en: "This Pokémon is now Confused.",
			fr: "Ce Pokémon est maintenant Confus.",
		},
		damage: 170
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
