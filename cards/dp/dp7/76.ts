import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp7/76/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/76/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/76/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/76/high.png",
		},
	},

	evolveFrom: {
		fr: "Moufouette",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

