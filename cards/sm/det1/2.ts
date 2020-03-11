import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "det1-2",
	localId: 2,

	// Card informations
	name: {
		en: "Ludicolo",
		fr: "Ludicolo",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 272,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/det1/2/low",
			fr: "https://assets.tcgdex.net/fr/sm/det1/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/det1/2/high",
			fr: "https://assets.tcgdex.net/fr/sm/det1/2/high",
		},
	},

	evolveFrom: {
		en: "Lombre",
		fr: "Lombre",
	},

	tags: [
		Tag.STAGE2,
	],



	abilities: [{
		id: 1217,
		type: AbilityType.TALENT,
		name: {
			en: "Table Service",
			fr: "Service à Table",
		},
		text: {
			en: "Once during your turn (before your attack), you may heal 30 damage from 1 of your Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 30 dégâts à l’un de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Punch and Run",
			fr: "Frapper et Partir en Courant",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Detective Pikachu",
		code: "det1"
	}
}

export default card
