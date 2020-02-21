import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-48",
	localId: 48,

	// Card informations
	name: {
		en: "Walrein",
		fr: "Kaimorse",
	},

	hp: 150,

	type: [
		Type.WATER,
	],

	dexId: 365,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/48/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/48/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/48/high",
		},
	},

	evolveFrom: {
		en: "Sealeo",
		fr: "Phogleur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 77,
		name: "Satoshi Shirai"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Knock Over",
			fr: "Culbute",
		},
		text: {
			en: "You may discard any Stadium card in play.",
			fr: "Vous pouvez défausser toute carte Stade en jeu.",
		},
		damage: 50
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Frozen Splash",
			fr: "Trempette Glacée",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Fighting Pokémon, this attack does 70 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Fighting, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
