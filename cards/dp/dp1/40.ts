import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp1/40/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/40/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/40/high",
		},
	},

	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",



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
