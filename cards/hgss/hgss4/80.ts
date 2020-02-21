import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-80",
	localId: 80,

	// Card informations
	name: {
		en: "Tentacool",
		fr: "Tentacool",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 72,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/80/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/80/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 12,
		name: "Sachiko Adachi"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Gentle Wrap",
			fr: "Enveloppe douce",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
