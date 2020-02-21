import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-61",
	localId: 61,

	// Card informations
	name: {
		en: "Doublade",
		fr: "Dimoclès",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 680,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/61/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/61/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/61/high",
		},
	},

	evolveFrom: {
		en: "Honedge",
		fr: "Monorpale",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Stab Deeply",
			fr: "Blessure Profonde",
		},
		text: {
			en: "Put 3 damage counters on your opponent's Active Pokémon.",
			fr: "Placez 3 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
		},
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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
