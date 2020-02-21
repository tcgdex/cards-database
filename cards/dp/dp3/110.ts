import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-110",
	localId: 110,

	// Card informations
	name: {
		en: "Shuppet",
		fr: "Polichombr",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 353,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/110/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/110/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Gossip",
			fr: "Potin",
		},
		text: {
			en: "Put 1 damage counter on 1 of your opponent's Pokémon.",
			fr: "Placez 1 marqueur de dégât sur 1 des Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hang Down",
			fr: "Pendre",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+10"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
