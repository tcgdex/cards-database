import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-97",
	localId: 97,

	// Card informations
	name: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 32,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/97/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/97/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Collect",
			fr: "Collectionner",
		},
		text: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Poison Skin",
			fr: "Peau poison",
		},
		text: {
			en: "Flip 2 coins. If either of them is heads, the Defending Pokémon is now Poisoned.",
			fr: "Lancez 2 pièces. Si vous obtenez une face, le Pokémon Défenseur est maintenant Empoisonné.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
