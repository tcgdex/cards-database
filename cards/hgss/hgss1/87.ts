import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-87",
	localId: 87,

	// Card informations
	name: {
		en: "Vulpix",
		fr: "Goupix",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 37,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/87/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/87/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Singe",
			fr: "Roussir",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Brûlé.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Ember",
			fr: "Flammèche",
		},
		text: {
			en: "Flip a coin. If tails, discard a Fire Energy attached to Vulpix.",
			fr: "Lancez une pièce. Si c’est pile, défaussez-vous d’une carte Énergie Fire attachée à Goupix.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
