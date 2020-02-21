import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-7",
	localId: 7,

	dexId: 556,

	// Card informations
	name: {
		en: "Maractus",
		fr: "Maracachi",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/7/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/7/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 1,
		name: "Atsuko Nishida"
	},

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Zzzt",
			fr: "Bzzz",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Powerful Needles",
			fr: "Piquants Puissants",
		},
		text: {
			en: "Flip a coin for each Energy attached to this Pokémon. This attack does 60 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 60 dégâts pour chaque côté face.",
		},
		damage: "60×"
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
