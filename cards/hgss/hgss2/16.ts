import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-16",
	localId: 16,

	// Card informations
	name: {
		en: "Floatzel",
		fr: "Mustéflott",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 419,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/16/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/16/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/16/high",
		},
	},

	evolveFrom: {
		fr: "Mustébouée",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 91,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Water Acceleration",
			fr: "Hydro-accélération",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach a Water Energy card from your hand to Floatzel. This power can't be used if Floatzel is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Water de votre main à Mustéflott. Ce pouvoir ne peut pas être utilisé si Mustéflott est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Waterfall",
			fr: "Cascade",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
