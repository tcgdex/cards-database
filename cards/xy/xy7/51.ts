import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-51",
	localId: 51,

	// Card informations
	name: {
		en: "Registeel",
		fr: "Registeel",
	},

	hp: 120,

	type: [
		Type.METAL,
	],

	dexId: 379,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/51/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/51/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Iron Head",
			fr: "Tête de Fer",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Forbidden Iron Hammer",
			fr: "Marteau de Fer Défendu",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Pokémon-EX, discard an Energy attached to that Pokémon.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, défaussez une Énergie lui étant attachée.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
