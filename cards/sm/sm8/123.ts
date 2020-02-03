import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm8/123/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/123/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/123/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/123/high.png",
		},
	},

	evolveFrom: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



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

