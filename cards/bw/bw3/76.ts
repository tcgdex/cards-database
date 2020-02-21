import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-76",
	localId: 76,

	// Card informations
	name: {
		en: "Bisharp",
		fr: "Scalproie",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 625,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/76/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/76/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/76/high",
		},
	},

	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Finishing Blow",
			fr: "Coup de Grâce",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, this attack does 50 more damage.",
			fr: "Si le Pokémon Défenseur a déjà des marqueurs de dégâts, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Night Slash",
			fr: "Tranche-Nuit",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
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
