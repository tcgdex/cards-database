import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-75",
	localId: 75,

	// Card informations
	name: {
		en: "Cherubi",
		fr: "Ceribou",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 420,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/75/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/75/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sleep Powder",
			fr: "Poudre dodo",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leech Seed",
			fr: "Vampigraine",
		},
		text: {
			en: "If this attack does any damage to the Defending Pokémon (after applying Weakness and Resistance), remove 1 damage counter from Cherubi.",
			fr: "Si cette attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), retirez à Ceribou  un marqueur de dégât.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
