import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm3/96/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/96/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/96/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/96/high.png",
		},
	},

	evolveFrom: {
		en: "Cutiefly",
		fr: "Bombydou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},

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

