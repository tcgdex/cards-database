import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-90",
	localId: 90,

	// Card informations
	name: {
		en: "Mime Jr.",
		fr: "Mime Jr.",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 439,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/90/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/90/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/90/high",
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

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
			fr: "Évolution bébé",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Mr. Mime from your hand onto Mime Jr. (this counts as evolving Mime Jr.) and remove all damage counters from Mime Jr.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer M Mime de votre main sur Mime Jr. (vous le faites ainsi évoluer) et retirer à Mime Jr. tous ses marqueurs de dégât.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Mime",
			fr: "Mime",
		},
		text: {
			en: "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand.",
			fr: "Mélangez votre main à votre deck. Ensuite, piochez autant de cartes qu'il y a de cartes dans la main de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
