import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-5",
	localId: 5,

	// Card informations
	name: {
		en: "Scatterbug",
		fr: "Lépidonille",
	},

	hp: 30,

	type: [
		Type.GRASS,
	],

	dexId: 664,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/5/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/5/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kirisAki",

	abilities: [{
		id: 1140,
		type: AbilityType.TALENT,
		name: {
			en: "Abnormal Outbreak",
			fr: "Effusion Paradoxale",
		},
		text: {
			en: "You can use this Ability only if you go second. Once during your first turn (before your attack), you may search your deck for a Spewpa and a Vivillon, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Vous ne pouvez utiliser ce talent que si vous jouez en second. Une seule fois pendant votre premier tour (avant votre attaque), vous pouvez chercher un Pérégrain et un Prismillon dans votre deck, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
