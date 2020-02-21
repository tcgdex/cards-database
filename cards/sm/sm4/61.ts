import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-61",
	localId: 61,

	// Card informations
	name: {
		en: "Zweilous",
		fr: "Diamat",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 634,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/61/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/61/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/61/high",
		},
	},

	evolveFrom: {
		en: "Deino",
		fr: "Solochi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 36,
		name: "kodama"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
			fr: "Coup d’Boule",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Hit",
			fr: "Coup Double",
		},
		text: {
			en: "Flip 2 coins. This attack does 60 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
