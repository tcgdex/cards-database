import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-48",
	localId: 48,

	// Card informations
	name: {
		en: "Hawlucha",
		fr: "Brutalibré",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 701,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/48/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/48/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/48/high",
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
			en: "Backflip",
			fr: "Salto Arrière",
		},
		text: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Wicked Jab",
			fr: "Piqûre Infernale",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
