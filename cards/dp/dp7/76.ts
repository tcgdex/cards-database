import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-76",
	localId: 76,

	// Card informations
	name: {
		en: "Stunky",
		fr: "Stunky",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 434,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/76/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/76/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/76/high",
		},
	},

	evolveFrom: {
		fr: "Moufouette",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Gnaw and Run",
			fr: "Ronger et courrir",
		},
		text: {
			en: "Switch Stunky with 1 of your Benched Pokémon.",
			fr: "Échangez Moufouette avec 1 des Pokémon de votre Banc.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Scratch",
			fr: "Double écorchure",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
