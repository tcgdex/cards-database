import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-32",
	localId: 32,

	// Card informations
	name: {
		en: "Cryogonal",
		fr: "Hexagel",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 615,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/32/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/32/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Icy Wind",
			fr: "Vent Glace",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Shard",
			fr: "Éclats Glace",
		},
		text: {
			en: "If the Defending Pokémon is a Fighting Pokémon, this attack does 40 more damage.",
			fr: "Si le Pokémon Défenseur est un Pokémon Fighting, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
