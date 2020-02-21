import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-24",
	localId: 24,

	// Card informations
	name: {
		en: "M Manectric-EX",
		fr: "M-Élecsprint-EEX",
	},

	hp: 210,

	type: [
		Type.LIGHTNING,
	],

	dexId: 310,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/24/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/24/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/24/high",
		},
	},

	evolveFrom: {
		en: "Manectric-EX",
		fr: "Élecsprint-eEX",
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
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Turbo Bolt",
			fr: "Éclair Turbo",
		},
		text: {
			en: "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
