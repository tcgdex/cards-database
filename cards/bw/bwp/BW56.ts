import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW56",
	localId: "BW56",

	// Card informations
	name: {
		en: "Empoleon",
		fr: "Pingoléon",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 395,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW56/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW56/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW56/high",
		},
	},

	evolveFrom: {
		en: "Prinplup",
		fr: "Prinplouf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Fury Attack",
			fr: "Furie",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cold Crush",
			fr: "Écrasement Net",
		},
		text: {
			en: "You may discard an Energy attached to this Pokémon. If you do, discard an Energy attached to the Defending Pokémon.",
			fr: "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
