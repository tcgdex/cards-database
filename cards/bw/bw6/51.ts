import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-51",
	localId: 51,

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
			en: "https://assets.tcgdex.net/en/bw/bw6/51/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/51/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/51/high",
		},
	},

	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
