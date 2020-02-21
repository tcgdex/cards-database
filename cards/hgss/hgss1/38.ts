import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-38",
	localId: 38,

	// Card informations
	name: {
		en: "Croconaw",
		fr: "Crocodil",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 159,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/38/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/38/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/38/high",
		},
	},

	evolveFrom: {
		en: "Totodile",
		fr: "Kaiminus",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Wave Splash",
			fr: "Grosse vague",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Big Bite",
			fr: "Grosse morsure",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
