import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-30",
	localId: 30,

	// Card informations
	name: {
		en: "Sceptile",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 254,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/30/high",
		},
	},

	evolveFrom: {
		en: "Grovyle",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 107,
		name: "Reiko Tanoue"
	},

	abilities: [{
		id: 150,
		type: AbilityType.POKEBODY,
		name: {
			en: "Green Breath",
		},
		text: {
			en: "When you attach a Grass Energy card from your hand to Sceptile, remove 2 damage counters from Sceptile.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Leaf Blast",
		},
		text: {
			en: "Does 20 damage times the amount of Grass Energy attached to Sceptile.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Claws",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
