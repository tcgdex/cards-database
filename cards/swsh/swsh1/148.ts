import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-148",
	localId: 148,

	// Card informations
	name: {
		en: "Oranguru",
		fr: "Gouroutan",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/148/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/148/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shigenori Negishi",

	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Primate Wisdom",
			fr: "Sagesse du Primate",
		},
		text: {
			en: "Once during your turn, you may switch a card from your hand with the top card of your deck.",
			fr: "Une fois pendant votre tour, vous pouvez échanger une carte de votre main contre la carte du dessus de votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Whap Down",
			fr: "Assommer",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
