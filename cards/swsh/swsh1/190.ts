import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-190",
	localId: 190,

	// Card informations
	name: {
		en: "Morpeko V",
		fr: "Morpeko V",
	},

	hp: 170,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/190/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/190/low.png",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.V,
	],

	illustrator: {
		id: 39,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spark",
			fr: "Étincelle",
		},
		text: {
			en: "This attack also does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Electro Wheel",
			fr: "Électro Roue",
		},
		text: {
			en: "Discard an Energy from this Pokémon. If you do, switch it with 1 of your Benched Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, échangez-le contre l’un de vos Pokémon de Banc.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
