import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-38",
	localId: 38,

	// Card informations
	name: {
		en: "Shaymin",
		fr: "Shaymin",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 492,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/38/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/38/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/38/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		name: {
			en: "Energy Blow",
			fr: "Coup d'énergie",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each Energy attached to Shaymin.",
			fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Shaymin.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aromatherapy",
			fr: "Aromathérapi",
		},
		text: {
			en: "Remove 2 damage counters from each of your Pokémon.",
			fr: "Retirez à chacun de vos Pokémon 2 marqueurs de dégât.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
