import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-15",
	localId: 15,

	// Card informations
	name: {
		en: "Shaymin",
		fr: "Shaymin",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 492,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/15/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/15/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		name: {
			en: "Growth",
			fr: "Croissance",
		},
		text: {
			en: "Attach a Grass Energy card from your hand to Shaymin.",
			fr: "Attachez à Shaymin une carte Énergie Grass de votre main",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Air Slash",
			fr: "Lame d'Air",
		},
		text: {
			en: "Flip a coin. If tails, discard an Energy attached to Shaymin.",
			fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie attachée à Shaymin.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
