import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-98",
	localId: 98,

	// Card informations
	name: {
		en: "Skarmory",
		fr: "Airmure",
	},

	hp: 110,

	type: [
		Type.METAL,
	],

	dexId: 227,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/98/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/98/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/98/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Calm Strike",
			fr: "Frappe Placide",
		},
		text: {
			en: "If you have used your GX attack, this attack does 70 more damage.",
			fr: "Si vous avez utilisé votre attaque GX, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Steel Wing",
			fr: "Aile d’Acier",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 90
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
		name: "Team Up",
		code: "sm9"
	}
}

export default card
