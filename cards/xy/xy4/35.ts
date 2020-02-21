import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-35",
	localId: 35,

	// Card informations
	name: {
		en: "M Gengar-EX",
		fr: "M-Ectoplasma-EX",
	},

	hp: 220,

	type: [
		Type.PSYCHIC,
	],

	dexId: 94,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/35/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/35/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/35/high",
		},
	},

	evolveFrom: {
		en: "Gengar-EX",
		fr: "Ectoplasma-EX",
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
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Phantom Gate",
			fr: "Miroir Miroir",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon's attacks and use it as this attack.",
			fr: "Choisissez l'une des attaques des Pokémon de votre adversaire et utilisez-la en tant que cette attaque.",
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

	retreat: 1,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
