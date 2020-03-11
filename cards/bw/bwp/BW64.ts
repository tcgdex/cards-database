import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW64",
	localId: "BW64",

	// Card informations
	name: {
		en: "Drifblim",
		fr: "Grodrive",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 426,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW64/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW64/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW64/high",
		},
	},

	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Shadow Steal",
			fr: "Vol d'Ombre",
		},
		text: {
			en: "Does 50 damage times the number of Special Energy cards in your opponent's discard pile.",
			fr: "Inflige 50 dégâts multipliés par le nombre de cartes Énergie spéciale dans la pile de défausse de votre adversaire.",
		},
		damage: 50
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Plentiful Placement",
			fr: "Placement Multiple",
		},
		text: {
			en: "Put 4 damage counters on 1 of your opponent's Pokémon.",
			fr: "Placez 4 marqueurs de dégâts sur 1 des Pokémon de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
