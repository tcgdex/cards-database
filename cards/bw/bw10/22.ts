import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-22",
	localId: 22,

	// Card informations
	name: {
		en: "Glalie",
		fr: "Oniglali",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 362,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/22/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/22/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/22/high",
		},
	},

	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Powder Snow",
			fr: "Poudreuse",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Reflect Energy",
			fr: "Renvoi d'Énergie",
		},
		text: {
			en: "Move a Water Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie Water de ce Pokémon vers 1 de vos Pokémon de Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
