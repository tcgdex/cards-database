import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgssp-HGSS06",
	localId: "HGSS06",

	// Card informations
	name: {
		en: "Noctowl",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 164,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS06/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS06/high",
		},
	},

	evolveFrom: {
		en: "Hoothoot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 1006,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Night Scope",
		},
		text: {
			en: "Once during your turn (before you attack), you may look at your opponent's hand. This Power can't be used if Noctowl is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hypnoblast",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HGSS Black Star Promos",
		code: "hgssp"
	}
}

export default card
