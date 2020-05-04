import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgssp-HGSS08",
	localId: "HGSS08",

	// Card informations
	name: {
		en: "Meganium",
	},

	hp: 150,

	type: [
		Type.GRASS,
	],

	dexId: 154,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS08/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS08/high",
		},
	},

	evolveFrom: {
		en: "Bayleef",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Noriko Hotta",

	abilities: [{
		id: 1073,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Leaf Trans",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a Grass Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Meganium is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Solarbeam",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HGSS Black Star Promos",
		code: "hgssp"
	}
}

export default card
