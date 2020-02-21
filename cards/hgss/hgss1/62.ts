import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-62",
	localId: 62,

	// Card informations
	name: {
		en: "Drowzee",
		fr: "Soporifik",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 96,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/62/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/62/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Sleep Inducer",
			fr: "Poussododo",
		},
		text: {
			en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Asleep.",
			fr: "Échangez le Pokémon Défenseur avec un Pokémon du Banc de votre adversaire. Le nouveau Pokémon Défenseur est maintenant Endormi.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gentle Slap",
			fr: "Gifle douce",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
