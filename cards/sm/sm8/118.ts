import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-118",
	localId: 118,

	// Card informations
	name: {
		en: "Alolan Meowth",
		fr: "Miaouss d’Alola",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 52,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/118/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/118/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/118/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		name: {
			en: "Spoil the Fun",
			fr: "Plaisir Gâché",
		},
		text: {
			en: "If you go second, this attack does 60 more damage during your first turn.",
			fr: "Si vous jouez en second, cette attaque inflige 60 dégâts supplémentaires pendant votre premier tour.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
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
