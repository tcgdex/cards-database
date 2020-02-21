import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-112",
	localId: 112,

	// Card informations
	name: {
		en: "Noivern",
		fr: "Bruyverne",
	},

	hp: 100,

	type: [
		Type.DRAGON,
	],

	dexId: 715,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/112/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/112/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/112/high",
		},
	},

	evolveFrom: {
		en: "Noibat",
		fr: "Sonistrelle",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tuning",
			fr: "Accordage",
		},
		text: {
			en: "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand.",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez un nombre de cartes égal au nombre de cartes dans la main de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Air Slash",
			fr: "Lame d'Air",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
