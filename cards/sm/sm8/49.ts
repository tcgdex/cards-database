import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-49",
	localId: 49,

	// Card informations
	name: {
		en: "Victini",
		fr: "Victini",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 494,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/49/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/49/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/49/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/49/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 96,
		name: "sowsow"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "V-Beatdown",
			fr: "Dérouillée Victoire",
		},
		text: {
			en: "This attack does 20 damage for each of your Basic Pokémon in play.",
			fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon de base en jeu.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

