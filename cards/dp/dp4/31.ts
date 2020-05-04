import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-31",
	localId: 31,

	// Card informations
	name: {
		en: "Weezing",
		fr: "Smogogo",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 110,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/31/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/31/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/31/high",
		},
	},

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 434,
		type: AbilityType.POKEBODY,
		name: {
			en: "Toxic Virus",
			fr: "Virus toxik",
		},
		text: {
			en: "At any time between turns, each player puts 1 more damage counter on his or her Poisoned Pokémon.",
			fr: "N'importe quand entre deux tours, chaque joueur place 1 marqueur de dégât supplémentaire sur ses Pokémon Empoisonnés.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Offensive Gas",
			fr: "Gaz offensif",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus et Empoisonné.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
