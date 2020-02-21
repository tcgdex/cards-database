import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-SL2",
	localId: "SL2",

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
			en: "https://assets.tcgdex.net/en/col/col1/SL2/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/SL2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/SL2/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/SL2/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Time Rewind",
			fr: "Retour temporel",
		},
		text: {
			en: "Shuffle your hand into your deck.",
			fr: "Mélangez votre main avec votre deck.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
