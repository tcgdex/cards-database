import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-94",
	localId: 94,

	// Card informations
	name: {
		en: "Trevenant",
		fr: "Desséliande",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 709,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/94/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/94/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/94/high",
		},
	},

	evolveFrom: {
		en: "Phantump",
		fr: "Brocélôme",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Perplexing Forest",
			fr: "Forêt Déroutante",
		},
		text: {
			en: "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Impact",
			fr: "Impact Lugubre",
		},
		text: {
			en: "Put 4 damage counters on 1 of your Pokémon.",
			fr: "Placez 4 marqueurs de dégâts sur l’un de vos Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
