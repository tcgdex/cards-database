import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dv1-9",
	localId: 9,

	// Card informations
	name: {
		en: "Latias",
		fr: "Latias",
	},

	hp: 100,

	type: [
		Type.DRAGON,
	],

	dexId: 380,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/dv1/9/low",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/dv1/9/high",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Assist",
			fr: "Assistance Énergétique",
		},
		text: {
			en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie de base de votre pile de défausse à 1 de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.PSYCHIC
		],
		name: {
			en: "Sky Heal",
			fr: "Guérison Céleste",
		},
		text: {
			en: "If Latios is on your Bench, heal 20 damage from this Pokémon.",
			fr: "Si Latios est sur votre Banc, soignez 20 dégâts à ce Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Vault",
		code: "dv1"
	}
}

export default card
