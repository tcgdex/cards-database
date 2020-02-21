import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-43",
	localId: 43,

	// Card informations
	name: {
		en: "Aipom",
		fr: "Capumain",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 190,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/43/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/43/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/43/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tail Code",
			fr: "Queue codée",
		},
		text: {
			en: "Move an Energy card attached to the Defending Pokémon to another of your opponent's Pokémon.",
			fr: "Prenez une carte Énergie attachée au Pokémon Défenseur et attachez-la à un autre des Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Smash",
			fr: "Éclate-queue",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
