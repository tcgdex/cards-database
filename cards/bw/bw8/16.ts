import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-16",
	localId: 16,

	// Card informations
	name: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 391,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/16/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/16/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/16/high",
		},
	},

	evolveFrom: {
		en: "Chimchar",
		fr: "Ouisticram",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Loud Howl",
			fr: "Hurlement Tonitruant",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Tail Slap",
			fr: "Coup de Queue Enflammé",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
