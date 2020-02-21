import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-66",
	localId: 66,

	// Card informations
	name: {
		en: "Ekans",
		fr: "Abo",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 23,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/66/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/66/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Shed Skin",
			fr: "Mue",
		},
		text: {
			en: "Remove 2 damage counters from Ekans.",
			fr: "Retirez à Abo 2 marqueurs de dégât.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Poison Fang",
			fr: "Croc-poison",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné,",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
