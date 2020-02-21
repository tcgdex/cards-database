import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY152",
	localId: "XY152",

	// Card informations
	name: {
		en: "Zygarde",
		fr: "Zygarde",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 718,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY152/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY152/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY152/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY152/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rumble",
			fr: "Bagarre",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Geostrike",
			fr: "Géofrappe",
		},
		text: {
			en: "This attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
