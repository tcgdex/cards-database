import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-118",
	localId: 118,

	// Card informations
	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 417,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/118/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/118/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/118/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tail Slap",
			fr: "Coud'Keu",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Pachi",
			fr: "Pachi",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
