import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-148",
	localId: 148,

	// Card informations
	name: {
		en: "Golem",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 76,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/148/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/148/high",
		},
	},

	evolveFrom: {
		en: "Graveler",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 1295,
		type: AbilityType.POKEBODY,
		name: {
			en: "Crystal Type",
		},
		text: {
			en: "Whenever you attach a Grass, Fire, or Fighting basic Energy card from your hand to Golem, Golem's type (color) becomes the same as that type of energy until the end of the turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Throw",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.GRASS,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Earth Bomb",
		},
		text: {
			en: "Golem does 20 damage to itself. This attack also does 10 damage to each Benched Pokémon (yours and your opponents). (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
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
