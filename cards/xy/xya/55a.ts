import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xya-55a",
	localId: "55a",

	// Card informations
	name: {
		fr: "M-Lucario-ex",
	},

	hp: 220,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/xy/xya/55a/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/xy/xya/55a/high",
		},
	},

	evolveFrom: {
		fr: "Lucario-ex",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			fr: "Poing Imminent",
		},
		text: {
			fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 140
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "carte alternative A Jaune",
		code: "xya"
	}
}

export default card
