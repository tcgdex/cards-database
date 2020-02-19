import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-164",
	localId: 164,

	// Card informations
	name: {
		en: "Pikipek",
		fr: "Picassaut",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 731,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/164/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/164/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/164/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/164/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Send Back",
			fr: "Renvoyer",
		},
		text: {
			en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

