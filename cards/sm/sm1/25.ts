import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-25",
	localId: 25,

	// Card informations
	name: {
		en: "Torracat",
		fr: "Matoufeu",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 726,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/25/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/25/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/25/high",
		},
	},

	evolveFrom: {
		en: "Litten",
		fr: "Flamiaou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fury Swipes",
			fr: "Combo-Griffe",
		},
		text: {
			en: "Flip 3 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
