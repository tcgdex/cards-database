import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-145",
	localId: 145,

	// Card informations
	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
	},

	hp: 170,

	type: [
		Type.FIGHTING,
	],

	dexId: 464,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/145/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/145/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/145/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/145/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {
			en: "Hard Crush",
			fr: "Écras'dur",
		},
		text: {
			en: "Discard the top 5 cards from your deck. This attack does 50 damage for each Energy card you discarded.",
			fr: "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 50 dégâts par chaque carte Énergie défaussée.",
		},
		damage: 50
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Upthrow",
			fr: "Soulèvement",
		},
		text: {
			en: "Search your discard pile for all Fighting Energy cards, show them to your opponent, and shuffle them into your deck.",
			fr: "Cherchez dans votre pile de défausse toutes les cartes Énergie Fighting, montrez-les à votre adversaire et mélangez-les à votre deck.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
