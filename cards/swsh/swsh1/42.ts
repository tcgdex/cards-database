import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-42",
	localId: 42,

	// Card informations
	name: {
		en: "Krabby",
		fr: "Krabby",
	},

	hp: 80,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/42/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/42/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/42/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/42/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "ryoma uratsuka"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Aqua Shower",
			fr: "Aqua-Douche",
		},
		text: {
			en: "This attack does 10 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Vise Grip",
			fr: "Force Poigne",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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
