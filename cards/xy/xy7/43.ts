import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-43",
	localId: 43,

	// Card informations
	name: {
		en: "M Tyranitar-EX",
		fr: "M Tyranocif-EX",
	},

	hp: 240,

	type: [
		Type.DARKNESS,
	],

	dexId: 248,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/43/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/43/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/43/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/43/high.png",
		},
	},

	evolveFrom: {
		en: "Tyranitar-EX",
		fr: "Tyranocif-EX",
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
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Destroyer King",
			fr: "Double Θ",
		},
		text: {
			en: "This attack does 60 more damage for each damage counter on your opponent's Active Pokémon.",
		},
		damage: 110
	},{
		name: {
			fr: "Règle des Méga-Évolutions",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Roi Destructeur",
		},
		text: {
			fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
		},
		damage: "110+"
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

