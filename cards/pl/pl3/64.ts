import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-64",
	localId: 64,

	// Card informations
	name: {
		en: "Loudred",
		fr: "Ramboum",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 294,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/64/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/64/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/64/high",
		},
	},

	evolveFrom: {
		en: "Whismur",
		fr: "Chuchmur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Smash Kick",
			fr: "Coud'pattes",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stomp Off",
			fr: "Trépignement",
		},
		text: {
			en: "Discard the top card from your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
