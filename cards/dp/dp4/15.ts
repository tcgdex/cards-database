import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-15",
	localId: 15,

	// Card informations
	name: {
		en: "Claydol",
		fr: "Kaorine",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 344,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/15/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/15/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/15/high",
		},
	},

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 471,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Cosmic Power",
			fr: "Force cosmik",
		},
		text: {
			en: "Once during your turn (before your attack), you may choose up to 2 cards from your hand and put them on the bottom of your deck in any order. If you do, draw cards until you have 6 cards in your hand. This power can't be used if Claydol is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir jusqu'à 2 cartes de votre main et les placer au dessous de votre deck dans n'importe quel ordre. Piochez alors des cartes jusqu'à ce que vous ayez 6 cartes en main. Ce pouvoir ne peut pas être utilisé si Kaorine est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Attack",
			fr: "Attaque tournante",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
