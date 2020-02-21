import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-69",
	localId: 69,

	// Card informations
	name: {
		en: "Skarmory",
		fr: "Airmure",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 227,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/69/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/69/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call for Family",
			fr: "Appel à la Famille",
		},
		text: {
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blow Through",
			fr: "Grosse Bourrasque",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 30 more damage.",
			fr: "S'il y a une carte Stade en jeu, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
