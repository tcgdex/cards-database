import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-151",
	localId: 151,

	// Card informations
	name: {
		en: "Dodrio",
		fr: "Dodrio",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 85,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/151/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/151/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/151/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/151/high.png",
		},
	},

	evolveFrom: {
		en: "Doduo",
		fr: "Doduo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 66,
		name: "Misa Tsutsui"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tri Attack",
			fr: "Triplattaque",
		},
		text: {
			en: "Flip 3 coins. This attack does 60 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
		},
		damage: 60
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Accelerating Stab",
			fr: "Poignard Accélérateur",
		},
		text: {
			en: "This Pokémon can't use Accelerating Stab during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Poignard Accélérateur pendant votre prochain tour.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

