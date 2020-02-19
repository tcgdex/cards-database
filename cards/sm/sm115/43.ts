import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-43",
	localId: 43,

	// Card informations
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
	},

	hp: 90,

	type: [
		Type.FAIRY,
	],

	dexId: 122,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/43/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/43/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/43/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/43/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 83,
		name: "Hideki Ishikawa"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Happy Mime",
			fr: "Mime Heureux",
		},
		text: {
			en: "Each player draws a card.",
			fr: "Chaque joueur pioche une carte.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY
		],
		name: {
			en: "Double Slap",
			fr: "Torgnoles",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
		},
		damage: 40
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card

