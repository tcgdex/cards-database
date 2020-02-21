import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-34",
	localId: 34,

	// Card informations
	name: {
		en: "Weezing",
		fr: "Smogogo",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 110,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/34/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/34/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/34/high",
		},
	},

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Super Poison Breath",
			fr: "Super haleine empoisonnée",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Super Explosion",
			fr: "Super explosion",
		},
		text: {
			en: "Weezing does 90 damage to itself, and don't apply Weakness to this damage.",
			fr: "Smogogo s’inflige 90 dégâts et n’appliquez pas la Faiblesse à ces dégâts.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
