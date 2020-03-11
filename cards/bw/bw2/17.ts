import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-17",
	localId: 17,

	// Card informations
	name: {
		en: "Virizion",
		fr: "Viridium",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 640,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/17/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/17/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Giga Drain",
			fr: "Giga-Sangsue",
		},
		text: {
			en: "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
			fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Sacred Sword",
			fr: "Lame Sainte",
		},
		text: {
			en: "This Pokémon can't use Sacred Sword during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Lame Sainte pendant votre prochain tour.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
