import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-25",
	localId: 25,

	// Card informations
	name: {
		en: "Dodrio",
		fr: "Dodrio",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 85,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/25/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/25/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/25/high",
		},
	},

	evolveFrom: {
		en: "Doduo",
		fr: "Doduo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 734,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Echo Draw",
			fr: "Pioche renvoi",
		},
		text: {
			en: "Once during your turn (before your attack), you may draw a card. This power can't be used if Dodrio is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez piocher une carte. Ce pouvoir ne peut pas être utilisé si Dodrio est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Drill Peck",
			fr: "Bec vrille",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
