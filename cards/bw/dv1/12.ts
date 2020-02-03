import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dv1-12",
	localId: 12,

	// Card informations
	name: {
		en: "Axew",
		fr: "Coupenotte",
	},

	hp: 40,

	type: [
		Type.DRAGON,
	],

	dexId: 610,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/dv1/12/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/12/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/dv1/12/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/12/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Signs of Evolution",
			fr: "Signes d'Évolution",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for Fraxure, reveal it, and put it into your hand. Shuffle your deck afterward.",
			fr: "Lancez une pièce. Si c'est face, cherchez Incisache dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.METAL
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Vault",
		code: "dv1"
	}
}

export default card

