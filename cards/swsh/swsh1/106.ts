import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-106",
	localId: 106,

	// Card informations
	name: {
		en: "Mudsdale",
		fr: "Bourrinos",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/106/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/106/low.png",
		}
	},

	evolveFrom: {
		en: "Mudbray",
		fr: "Tiboudet",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 56,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Double Impact",
			fr: "Double Impact",
		},
		text: {
			en: "Flip 2 coins. This attack does 120 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 120 dégâts pour chaque côté face.",
		},
		damage: "120×"
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
