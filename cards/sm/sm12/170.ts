import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-170",
	localId: 170,

	// Card informations
	name: {
		en: "Ambipom",
		fr: "Capidextre",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 424,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/170/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/170/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/170/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/170/high.png",
		},
	},

	evolveFrom: {
		en: "Aipom",
		fr: "Capumain",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Nice-Nice Catch",
			fr: "Jolie Jolie Prise",
		},
		text: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bye-Bye Throw",
			fr: "Lancer Ciao Ciao",
		},
		text: {
			en: "Discard up to 2 cards from your hand. This attack does 60 damage for each card you discarded in this way.",
			fr: "Défaussez jusqu’à 2 cartes de votre main. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

