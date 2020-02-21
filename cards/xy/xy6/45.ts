import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-45",
	localId: 45,

	// Card informations
	name: {
		en: "Togekiss",
		fr: "Togekiss",
	},

	hp: 140,

	type: [
		Type.FAIRY,
	],

	dexId: 468,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/45/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/45/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/45/high",
		},
	},

	evolveFrom: {
		en: "Togetic",
		fr: "Togetic",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Powerful Slap",
			fr: "Grosse Baffe",
		},
		text: {
			en: "Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage times the number of heads.",
			fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 50
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Aura Sphere",
			fr: "Aurasphère",
		},
		text: {
			en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
