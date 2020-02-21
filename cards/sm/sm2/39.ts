import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-39",
	localId: 39,

	// Card informations
	name: {
		en: "Mareanie",
		fr: "Vorastérie",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 747,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/39/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/39/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bail Out",
			fr: "Renflouage",
		},
		text: {
			en: "Put a Pokémon from your discard pile into your hand.",
			fr: "Ajoutez un Pokémon de votre pile de défausse à votre main.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
