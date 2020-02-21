import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-23",
	localId: 23,

	// Card informations
	name: {
		en: "Gyarados",
		fr: "Léviator",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/23/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/23/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/23/high",
		},
	},

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Berserker Splash",
			fr: "Folle Éclaboussure",
		},
		text: {
			en: "This attack does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 80
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Tail",
			fr: "Hydroqueue",
		},
		text: {
			en: "Flip a coin for each Water Energy attached to this Pokémon. This attack does 30 more damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie Water attachée à ce Pokémon. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
