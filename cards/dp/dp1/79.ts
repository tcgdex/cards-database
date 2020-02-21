import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-79",
	localId: 79,

	// Card informations
	name: {
		en: "Combee",
		fr: "Apitrini",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 415,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/79/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/79/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/79/high",
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
			en: "Soliciting Nectar",
			fr: "Nectar alléchant",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. The new Defending Pokémon is now Asleep.",
			fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Le nouveau Pokémon Défenseur est maintenant Endormi.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
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
