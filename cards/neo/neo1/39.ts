import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-39",
	localId: 39,

	// Card informations
	name: {
		en: "Ledian",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 166,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/39/high",
		},
	},

	evolveFrom: {
		en: "Ledyba",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Baton Pass",
		},
		text: {
			en: "If you have any Pokémon on your Bench, remove all Energy cards from Ledian and attach them to 1 of those Pokémon, then switch Ledian with that Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
