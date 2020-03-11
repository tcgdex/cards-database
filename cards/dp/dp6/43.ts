import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-43",
	localId: 43,

	// Card informations
	name: {
		en: "Uxie",
		fr: "Créhelf",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 480,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/43/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/43/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/43/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 395,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Set Up",
			fr: "Mise en place",
		},
		text: {
			en: "Once during your turn, when you put Uxie from your hand onto your Bench, you may draw cards until you have 7 cards in your hand.",
			fr: "Une seule fois lors de votre tour, lorsque vous placez Créhelf de votre main sur votre Banc, vous pouvez piocher des cartes jusqu'à ce que vous ayez 7 cartes en main.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Psychic Restore",
			fr: "Restitution psy",
		},
		text: {
			en: "You may put Uxie and all cards attached to it on the bottom of your deck in any order.",
			fr: "Vous pouvez placer Créhelf ainsi que toutes les cartes qui lui sont attachées au dessous de votre deck dans n'importe quel ordre.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
