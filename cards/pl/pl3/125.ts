import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-125",
	localId: 125,

	// Card informations
	name: {
		en: "Seel",
		fr: "Otaria",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 86,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/125/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/125/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/125/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/125/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tail Slap",
			fr: "Coud'keu",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Icy Wind",
			fr: "Vent glacé",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
