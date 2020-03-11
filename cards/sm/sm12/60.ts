import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-60",
	localId: 60,

	// Card informations
	name: {
		en: "Swanna",
		fr: "Lakmécygne",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 581,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/60/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/60/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/60/high",
		},
	},

	evolveFrom: {
		en: "Ducklett",
		fr: "Couaneton",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tailwind",
			fr: "Vent Arrière",
		},
		text: {
			en: "Attach an Energy card from your hand to 1 of your Pokémon.",
			fr: "Attachez une carte Énergie de votre main à l’un de vos Pokémon.",
		},
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
		damage: 70
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
