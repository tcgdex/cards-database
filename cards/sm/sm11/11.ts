import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-11",
	localId: 11,

	// Card informations
	name: {
		en: "Crustle",
		fr: "Crabaraque",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 558,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/11/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/11/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/11/high",
		},
	},

	evolveFrom: {
		en: "Dwebble",
		fr: "Crabicoque",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",

	abilities: [{
		id: 142,
		type: AbilityType.TALENT,
		name: {
			en: "Shell Armor",
			fr: "Coque Armure",
		},
		text: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fury Cutter",
			fr: "Taillade",
		},
		text: {
			en: "Flip 3 coins. If 1 of them is heads, this attack does 40 more damage. If 2 of them are heads, this attack does 80 more damage. If all of them are heads, this attack does 150 more damage.",
			fr: "Lancez 3 pièces. S’il n’y a qu’un côté face, cette attaque inflige 40 dégâts supplémentaires. S’il y a 2 côtés face, cette attaque inflige 80 dégâts supplémentaires. S’il y a 3 côtés face, cette attaque inflige 150 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
