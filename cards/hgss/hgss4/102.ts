import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-102",
	localId: 102,

	// Card informations
	name: {
		en: "Palkia & Dialga LEGEND",
		fr: "Palkia & Dialga LÉGENDE",
	},



	type: [
		Type.WATER,
		Type.METAL,
	],

	dexId: 483,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/102/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/102/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/102/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/102/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],





	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sudden Delete",
			fr: "Disparition soudaine",
		},
		text: {
			en: "Choose 1 of your opponent's Benched Pokémon. Put that Pokémon and all cards attached to it back into your opponent's hand.",
			fr: "Choisissez l'un des Pokémon de Banc de votre adversaire. Remettez ce Pokémon et toutes les cartes qui lui sont attachées dans la main de votre adversaire.",
		},
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Time Control",
			fr: "Contrôle temporel",
		},
		text: {
			en: "Discard all Metal Energy attached to Palkia & Dialga LEGEND. Add the top 2 cards of your opponent's deck to his or her Prize cards.",
			fr: "Défaussez toutes les cartes Énergie Metal attachées à Palkia & Dialga LÉGENDE. Ajoutez les 2 cartes du dessus du deck de votre adversaire à ses cartes Récompense.",
		},
	},{
		name: {
			fr: "",
		},
		text: {
			fr: "Vous ne pouvez placer cette carte sur votre Banc que si vous placez en même temps l'autre moitié de Palkia & Dialga LÉGENDE.",
		},
	},{
		name: {},
		text: {
			fr: "Lorsque ce Pokémon est mis K.O., votre adversaire prend 2 cartes Récompense.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	},{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.LEGEND,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

