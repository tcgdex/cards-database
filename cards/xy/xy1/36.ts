import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-36",
	localId: 36,

	// Card informations
	name: {
		en: "Corsola",
		fr: "Corayon",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 222,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/36/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/36/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Refresh",
			fr: "Régénération",
		},
		text: {
			en: "Heal 30 damage and remove all Special Conditions from this Pokémon.",
			fr: "Soignez 30 dégâts et retirez tous les États Spéciaux de ce Pokémon.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Spiny Rush",
			fr: "Assaut Épineux",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "��2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
