import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-83",
	localId: 83,

	// Card informations
	name: {
		en: "Misdreavus",
		fr: "Feuforêve",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 200,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/83/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/83/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		name: {
			en: "Take Back",
			fr: "Reprendre",
		},
		text: {
			en: "Flip a coin. If heads, search your discard pile for a Trainer card, show it to your opponent, and put it into your hand.",
			fr: "Lancez une pièce. Si c'est face, choisissez dans votre pile de défausse une carte Dresseur, montrez-la à votre adversaire et placez-la dans votre main.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+10"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
