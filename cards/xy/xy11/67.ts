import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-67",
	localId: 67,

	// Card informations
	name: {
		en: "Steelix-EX",
		fr: "Steelix-EX",
	},

	hp: 180,

	type: [
		Type.METAL,
	],

	dexId: 208,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/67/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/67/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/67/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/67/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wild Edge",
			fr: "Tranchant Sauvage",
		},
		text: {
			en: "You may do 50 more damage. If you do, this Pokémon does 20 damage to itself.",
			fr: "Vous pouvez infliger 50 dégâts supplémentaires. Dans ce cas, ce Pokémon s’inflige 20 dégâts.",
		},
		damage: 80
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Iron Tail",
			fr: "Queue de Fer",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 100 damage times the number of heads.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 100 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

