import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-13",
	localId: 13,

	// Card informations
	name: {
		en: "Heatran-EX",
		fr: "Heatran-EX",
	},

	hp: 180,

	type: [
		Type.FIRE,
	],

	dexId: 485,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/13/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/13/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/13/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heat Boiler",
			fr: "Coup de Chaud",
		},
		text: {
			en: "If this Pokémon is affected by a Special Condition, this attack does 60 more damage.",
			fr: "Si ce Pokémon est affecté par un État Spécial, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dynamite Press",
			fr: "Pression Explosive",
		},
		text: {
			en: "If this Pokémon has any Plasma Energy attached to it, this attack does 10 more damage for each damage counter on the Defending Pokémon.",
			fr: "Si de l'Énergie Plasma est attachée à ce Pokémon, cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Défenseur.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
