import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-82",
	localId: 82,

	// Card informations
	name: {
		en: "Bisharp",
		fr: "Scalproie",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 625,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/82/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/82/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/82/high",
		},
	},

	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Stream",
			fr: "Courant d'Énergie",
		},
		text: {
			en: "Attach a Metal Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie Metal de votre pile de défausse à ce Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metal Scissors",
			fr: "Ciseaux d'Acier",
		},
		text: {
			en: "Does 20 more damage for each Metal Energy attached to this Pokémon.",
			fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie Metal attachée à ce Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
