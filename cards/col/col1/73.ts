import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-73",
	localId: 73,

	// Card informations
	name: {
		en: "Teddiursa",
		fr: "Teddiursa",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 216,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/73/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/73/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fake Tears",
			fr: "Croco Larme",
		},
		text: {
			en: "Flip a coin. If heads, your opponent can't play any Trainer cards from his or her hand during your opponent's next turn, and any damage done to Teddiursa by attacks is reduced by 30 (after applying weakness and resistance).",
			fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes\nDresseur de sa main lors de son prochain tour, et tous les dégâts infligés à Teddiursa par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
