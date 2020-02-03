import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm8/118/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/118/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/118/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/118/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



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

