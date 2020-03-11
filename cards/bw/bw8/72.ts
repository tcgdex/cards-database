import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-72",
	localId: 72,

	// Card informations
	name: {
		en: "Donphan",
		fr: "Donphan",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 232,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/72/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/72/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/72/high",
		},
	},

	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Spinning Turn",
			fr: "Volte-Face",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wreck",
			fr: "Anéantissement",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 60 more damage. Discard that Stadium card.",
			fr: "S'il y a une carte Stade en jeu, cette attaque inflige 60 dégâts supplémentaires. Défaussez la carte Stade.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
