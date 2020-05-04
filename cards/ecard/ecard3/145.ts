import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-145",
	localId: 145,

	// Card informations
	name: {
		en: "Celebi",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 251,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/145/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/145/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 1295,
		type: AbilityType.POKEBODY,
		name: {
			en: "Crystal Type",
		},
		text: {
			en: "Whenever you attach a Grass, Water, or Psychic basic Energy card from your hand to Celebi, Celebi's type (color) becomes the same as that type of energy until the end of the turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.WATER
		],
		name: {
			en: "Empathetic Healing",
		},
		text: {
			en: "Remove 2 damage counters from Celebi and each Pokémon that's the same type (color) as Celebi.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Mind Bend",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
