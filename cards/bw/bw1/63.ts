import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-63",
	localId: 63,

	// Card informations
	name: {
		en: "Sandile",
		fr: "Mascaïman",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 551,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/63/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/63/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Sand Tomb",
			fr: "Tombe de Sable",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
