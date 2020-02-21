import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-28",
	localId: 28,

	// Card informations
	name: {
		en: "Giratina",
		fr: "Giratina",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 487,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/28/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/28/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/28/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 123,
		name: "Yusuke Ishikawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Dragonbreath",
			fr: "Dracosouffle",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+30"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
