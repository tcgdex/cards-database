import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-119",
	localId: 119,

	// Card informations
	name: {
		en: "Watchog",
		fr: "Miradar",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 505,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/119/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/119/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/119/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/119/high",
		},
	},

	evolveFrom: {
		en: "Patrat",
		fr: "Ratentif",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psych Up",
			fr: "Boost",
		},
		text: {
			en: "During your next turn, this Pokémon's Psych Up attack does 30 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Boost de ce Pokémon inflige 30 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
