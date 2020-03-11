import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-16",
	localId: 16,

	// Card informations
	name: {
		en: "Ninetales BREAK",
		fr: "Feunard TURBO",
	},

	hp: 140,

	type: [
		Type.FIRE,
	],

	dexId: 38,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/16/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/16/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/16/high",
		},
	},

	evolveFrom: {
		en: "Ninetales",
		fr: "Feunard",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Explosive Fireball",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "Discard all Fire Energy attached to this Pokémon. This attack does 60 more damage for each Energy card discarded in this way.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			fr: "Boule de Feu Explosive",
		},
		text: {
			fr: "Défaussez toutes les Énergies Fire attachées à ce Pokémon. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
		},
		damage: "10+"
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
