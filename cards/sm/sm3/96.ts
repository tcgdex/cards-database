import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-96",
	localId: 96,

	// Card informations
	name: {
		en: "Ribombee",
		fr: "Rubombelle",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 743,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/96/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/96/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/96/high",
		},
	},

	evolveFrom: {
		en: "Cutiefly",
		fr: "Bombydou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Megumi Mizutani",

	abilities: [{
		id: 1330,
		type: AbilityType.TALENT,
		name: {
			en: "Honey Gather",
			fr: "Cherche Miel",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher jusqu’à 2 cartes Énergie de base dans votre deck, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pollen Shot",
			fr: "Tir Pollen",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
