import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-59",
	localId: 59,

	// Card informations
	name: {
		en: "Inteleon",
		fr: "Lézargus",
	},

	hp: 160,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/59/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/59/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/59/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/59/high.png",
		},
	},

	evolveFrom: {
		en: "Drizzile",
		fr: "Arrozard",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 22,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Silent Shot",
			fr: "Coup Feutré",
		},
		text: {
			en: "Discard a random card from your opponent’s hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Snipe",
			fr: "Hydro-Frappe",
		},
		text: {
			en: "You may put an Energy attached to your opponent’s Active Pokémon into their hand.",
			fr: "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card

