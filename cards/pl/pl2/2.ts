import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-2",
	localId: 2,

	// Card informations
	name: {
		en: "Bastiodon GL",
		fr: "Bastiodon  Niv. 41",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 411,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/2/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/2/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/2/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bounce Back",
			fr: "Retour à l'envoyer",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Smack Attack",
			fr: "Claque-attaque",
		},
		text: {
			en: "Remove 1 damage counter from Bastiodon .",
			fr: "Retirez à Bastiodon  1 marqueur de dégât.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
