import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-24",
	localId: 24,

	// Card informations
	name: {
		en: "Fearow",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 22,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/24/high",
		},
	},

	evolveFrom: {
		en: "Spearow",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 55,
		name: "Hisao Nakamura"
	},

	abilities: [{
		id: 132,
		type: AbilityType.POKEBODY,
		name: {
			en: "Free Flight",
		},
		text: {
			en: "If Fearow has no Energy attached to it, Fearow's Retreat Cost is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shot Air",
		},
		text: {
			en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Drill Peck",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
