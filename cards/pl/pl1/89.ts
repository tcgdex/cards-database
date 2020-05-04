import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-89",
	localId: 89,

	// Card informations
	name: {
		en: "Ralts",
		fr: "Tarsal",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 280,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/89/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/89/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		name: {
			en: "Future Sight",
			fr: "Prescience",
		},
		text: {
			en: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
			fr: "Regardez les 5 cartes du dessus du deck de chaque joueur et replacez-les au dessus du deck de chaque joueur dans n'importe quel ordre.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
