import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgssp-HGSS04",
	localId: "HGSS04",

	// Card informations
	name: {
		en: "Wobbuffet",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 202,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS04/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS04/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",

	abilities: [{
		id: 1412,
		type: AbilityType.POKEBODY,
		name: {
			en: "Tenacious Bind",
		},
		text: {
			en: "As long as Wobbuffet is your Active Pokémon, your opponent's Active Pokémon's Retreat Cost is ColorlessColorless more.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Trip Over",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 30 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HGSS Black Star Promos",
		code: "hgssp"
	}
}

export default card
