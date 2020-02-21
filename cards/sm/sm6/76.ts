import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-76",
	localId: 76,

	// Card informations
	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 745,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/76/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/76/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/76/high",
		},
	},

	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Dangerous Rogue",
			fr: "Dangereux Truand",
		},
		text: {
			en: "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Accelerock",
			fr: "Vif Roc",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
