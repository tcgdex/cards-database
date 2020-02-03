import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-40",
	localId: 40,

	// Card informations
	name: {
		en: "Weavile",
		fr: "Dimoret",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 461,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/40/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/40/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/40/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/40/high.png",
		},
	},

	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Nasty Plot",
			fr: "Machination",
		},
		text: {
			en: "Search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck n'importe quelle carte et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Dark Pulse",
			fr: "Vibrobscur",
		},
		text: {
			en: "Does 10 damage times the total amount of Darkness Energy attached to all of your Pokémon.",
			fr: "Inflige 10 dégâts multipliés par le nombre d'Énergies Darkness attachées à tous vos Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card

