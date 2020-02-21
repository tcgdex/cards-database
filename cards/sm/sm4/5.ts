import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-5",
	localId: 5,

	// Card informations
	name: {
		en: "Cacnea",
		fr: "Cacnea",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 331,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/5/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/5/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sucker Punch",
			fr: "Coup Bas",
		},
		text: {
			en: "If this Pokémon has any Darkness Energy attached to it, this attack does 30 more damage.",
			fr: "Si de l’Énergie Darkness est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
