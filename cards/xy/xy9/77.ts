import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-77",
	localId: 77,

	// Card informations
	name: {
		en: "M Scizor-EX",
		fr: "M-Cizayox-EX",
	},

	hp: 220,

	type: [
		Type.METAL,
	],

	dexId: 212,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/77/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/77/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/77/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/77/high.png",
		},
	},

	evolveFrom: {
		en: "Scizor-EX",
		fr: "Cizayox-EX",
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
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Iron Crusher",
			fr: "Écrase Fer",
		},
		text: {
			en: "You may discard a Special Energy attached to your opponent's Active Pokémon or a Stadium card in play.",
			fr: "Vous pouvez défausser une carte Énergie spéciale attachée au Pokémon Actif de votre adversaire ou une carte Stade en jeu.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card

