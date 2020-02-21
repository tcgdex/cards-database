import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-149",
	localId: 149,

	// Card informations
	name: {
		en: "Drampa",
		fr: "Draïeul",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/149/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/149/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 34,
		name: "tetsuya koizumi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Pulse",
			fr: "Draco-Choc",
		},
		text: {
			en: "Discard the top 2 cards of your deck.",
			fr: "Défaussez les 2 cartes du dessus de votre deck.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
