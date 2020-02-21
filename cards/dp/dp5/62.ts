import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-62",
	localId: 62,

	// Card informations
	name: {
		en: "Eevee",
		fr: "Evoli",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 133,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/62/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/62/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call for Family",
			fr: "Appel à la famille",
		},
		text: {
			en: "Search your deck for as many Eevee as you like and put them onto your Bench. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck autant d'Evoli que vous le voulez et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Lunge",
			fr: "Coup rapide",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
