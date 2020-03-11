import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-124",
	localId: 124,

	// Card informations
	name: {
		en: "Pidgeot",
		fr: "Roucarnage",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 18,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/124/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/124/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/124/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/124/high",
		},
	},

	evolveFrom: {
		en: "Pidgeotto",
		fr: "Roucoups",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Whirlwind",
			fr: "Cyclone",
		},
		text: {
			en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		},
		damage: 60
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spin Storm",
			fr: "Orage Virevoltant",
		},
		text: {
			en: "Your opponent puts their Active Pokémon and all cards attached to it into their hand.",
			fr: "Votre adversaire place son Pokémon Actif et toutes les cartes qui lui sont attachées dans sa main.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
