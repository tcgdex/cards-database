import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-23",
	localId: 23,

	// Card informations
	name: {
		en: "Dialga",
		fr: "Dialga",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 483,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/23/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/23/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/23/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kent Kanetsuna",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Stream",
			fr: "Courant d'énergie",
		},
		text: {
			en: "Flip a coin. If heads, search your discard pile for a basic Energy card and attach it to Dialga.",
			fr: "Lancez une pièce. Si c'est face, choisissez dans votre pile de défausse une carte Énergie de base et attachez-la à Dialga.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Diamond Blow",
			fr: "Coup diamant",
		},
		text: {
			en: "Dialga can't attack during your next turn.",
			fr: "Dialga ne peut pas attaquer lors de votre prochain tour.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
