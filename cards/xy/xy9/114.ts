import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-114",
	localId: 114,

	// Card informations
	name: {
		en: "Gyarados-EX",
		fr: "Léviator-eEX",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/114/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/114/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/114/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Stormy Seas",
			fr: "Mers Orageuses",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, search your deck for a Water Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, cherchez une carte Énergie Water dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Splash Burn",
			fr: "Éclaboussure Brûlante",
		},
		text: {
			en: "This attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
