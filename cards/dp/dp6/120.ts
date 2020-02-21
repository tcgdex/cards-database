import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-120",
	localId: 120,

	// Card informations
	name: {
		en: "Sneasel",
		fr: "Farfuret",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 215,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/120/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/120/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/120/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Rob",
			fr: "Dérober",
		},
		text: {
			en: "Look at your opponent's hand. If your opponent has any Pokémon Tool or Technical Machine cards in his or her hand, put those cards on top of his or her deck. Your opponent shuffles his or her deck afterward.",
			fr: "Regardez la main de votre adversaire. S'il possède des cartes Outil Pokémon ou Machine Technique, placez ces cartes au dessus de son deck. Ensuite, votre adversaire mélange son deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
