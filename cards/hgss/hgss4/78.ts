import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-78",
	localId: 78,

	// Card informations
	name: {
		en: "Swablu",
		fr: "Tylton",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 333,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/78/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/78/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/78/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
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
			en: "Wing Flick",
			fr: "Battement d'aile",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec l'un de ses Pokémon de Banc.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
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
