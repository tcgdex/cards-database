import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-28",
	localId: 28,

	// Card informations
	name: {
		en: "Blaziken",
		fr: "Braségali",
	},

	hp: 140,

	type: [
		Type.FIRE,
	],

	dexId: 257,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/28/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/28/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/28/high",
		},
	},

	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Spreading Flames",
			fr: "Flammes Rampantes",
		},
		text: {
			en: "Attach 3 Fire Energy cards from your discard pile to your Pokémon in any way you like.",
			fr: "Attachez 3 cartes Énergie Fire de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Heat Blow",
			fr: "Coup Explosif",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
