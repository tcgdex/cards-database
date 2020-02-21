import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-68",
	localId: 68,

	// Card informations
	name: {
		en: "Farfetch'd",
		fr: "Canarticho",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 83,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/68/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/68/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Leek Slap",
			fr: "Coup d’oignon",
		},
		text: {
			en: "This Pokémon can't use Leek Slap during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Coup d’Oignon pendant votre prochain tour.",
		},
		damage: 50
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pot Smash",
			fr: "Coup de Casserole",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
