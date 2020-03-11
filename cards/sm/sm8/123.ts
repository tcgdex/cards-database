import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-123",
	localId: 123,

	// Card informations
	name: {
		en: "Alolan Dugtrio",
		fr: "Triopikeur d’Alola",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 51,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/123/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/123/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/123/high",
		},
	},

	evolveFrom: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yuka Morii",



	attacks: [{
		name: {
			en: "Digging Dash",
			fr: "Cours et Creuse",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
