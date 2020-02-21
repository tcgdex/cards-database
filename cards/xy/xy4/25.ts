import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-25",
	localId: 25,

	// Card informations
	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 417,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/25/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/25/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Trick Sticker",
			fr: "Colle-Farce",
		},
		text: {
			en: "The Defending Pokémon's Weakness is now Lightning until the end of your next turn. (The amount of Weakness doesn't change.)",
			fr: "La Faiblesse du Pokémon Défenseur est maintenant Lightning jusqu'à la fin de votre prochain tour. (La valeur de la Faiblesse ne change pas.)",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Pachi",
			fr: "Pachi",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
