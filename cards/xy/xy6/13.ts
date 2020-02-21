import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-13",
	localId: 13,

	// Card informations
	name: {
		en: "Victini",
		fr: "Victini",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 494,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/13/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/13/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/13/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Me First",
			fr: "Moi d'Abord",
		},
		text: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Psy Bolt",
			fr: "Choc Mental",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
