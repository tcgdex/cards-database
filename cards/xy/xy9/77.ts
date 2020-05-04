import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy9/77/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/77/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/77/high",
		},
	},

	evolveFrom: {
		en: "Scizor-EX",
		fr: "Cizayox-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



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

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
