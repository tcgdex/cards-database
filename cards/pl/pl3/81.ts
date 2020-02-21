import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-81",
	localId: 81,

	// Card informations
	name: {
		en: "Roserade",
		fr: "Roserade",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 407,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/81/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/81/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/81/high",
		},
	},

	evolveFrom: {
		en: "Roselia",
		fr: "Roselia",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Cut",
			fr: "Coupe",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Seed",
			fr: "Graine poison",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
