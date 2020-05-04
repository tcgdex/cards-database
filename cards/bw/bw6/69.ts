import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-69",
	localId: 69,

	// Card informations
	name: {
		en: "Sawk",
		fr: "Karaclée",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 539,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/69/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/69/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Defensive Stance",
			fr: "Posture Défensive",
		},
		text: {
			en: "Heal 30 damage from this Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon. Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Karate Chop",
			fr: "Poing-Karaté",
		},
		text: {
			en: "Does 70 damage minus 10 damage for each damage counter on this Pokémon.",
			fr: "Inflige 70 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
