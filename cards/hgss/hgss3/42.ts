import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-42",
	localId: 42,

	// Card informations
	name: {
		en: "Aron",
		fr: "Galekid",
	},

	hp: 50,

	type: [
		Type.METAL,
	],

	dexId: 304,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/42/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/42/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/42/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Metal Sound",
			fr: "Strido-son",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
			fr: "Coup d'boule",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
