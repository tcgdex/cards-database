import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-63",
	localId: 63,

	// Card informations
	name: {
		en: "Terrakion",
		fr: "Terrakium",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 639,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/63/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/63/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/63/high",
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
			en: "Boulder Crush",
			fr: "Rocher Écrasant",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Sacred Sword",
			fr: "Lame Sainte",
		},
		text: {
			en: "This Pokémon can't use Sacred Sword during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Lame Sainte pendant votre prochain tour.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
