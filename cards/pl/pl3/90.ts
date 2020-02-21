import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-90",
	localId: 90,

	// Card informations
	name: {
		en: "Beldum",
		fr: "Terhal",
	},

	hp: 50,

	type: [
		Type.METAL,
	],

	dexId: 374,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/90/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/90/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pit Search",
			fr: "Recherche dans la fosse",
		},
		text: {
			en: "Search your deck for a Stadium card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck une carte Stade, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.METAL
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
