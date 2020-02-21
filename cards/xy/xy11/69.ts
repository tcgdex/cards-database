import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-69",
	localId: 69,

	// Card informations
	name: {
		en: "Shieldon",
		fr: "Dinoclier",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 410,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/69/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/69/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.RESTORED,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Head",
			fr: "Tête de Roc",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
		},
		damage: 60
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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
