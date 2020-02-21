import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-63",
	localId: 63,

	// Card informations
	name: {
		en: "Pineco",
		fr: "Pomdepik",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 204,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/63/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/63/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Focus Energy",
			fr: "Puissance",
		},
		text: {
			en: "During your next turn, Pineco's Surprise Attack attack's base damage is 80.",
			fr: "Pendant votre prochain tour, l'Attaque surprise de Pomdepik inflige 80 dégâts de base.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Surprise Attack",
			fr: "Attaque surprise",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
