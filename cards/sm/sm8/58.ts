import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-58",
	localId: 58,

	// Card informations
	name: {
		en: "Mantine",
		fr: "Démanta",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 226,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/58/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/58/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sanosuke Sakuma",

	abilities: [{
		id: 1247,
		type: AbilityType.TALENT,
		name: {
			en: "Mantine Surf",
			fr: "Surf Démanta",
		},
		text: {
			en: "If this Pokémon has any Energy attached to it, it has no Retreat Cost.",
			fr: "Si de l’Énergie est attachée à ce Pokémon, il n’a pas de Coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Surf",
			fr: "Surf",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
