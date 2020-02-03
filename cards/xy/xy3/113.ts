import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-113",
	localId: 113,

	// Card informations
	name: {
		en: "M Lucario-EX",
		fr: "M-Lucario-EX",
	},

	hp: 220,

	type: [
		Type.FIGHTING,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/113/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/113/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/113/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/113/high.png",
		},
	},

	evolveFrom: {
		en: "Lucario-EX",
		fr: "Lucario-EX",
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
			en: "Rising Fist",
			fr: "Poing Imminent",
		},
		text: {
			en: "Discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 140
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card

