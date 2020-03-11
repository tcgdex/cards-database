import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-72",
	localId: 72,

	// Card informations
	name: {
		en: "Roselia",
		fr: "Roselia",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 315,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/72/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/72/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/72/high",
		},
	},

	evolveFrom: {
		fr: "Roselia",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
			fr: "Coup d'boule",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Petal Spikes",
			fr: "Pétales-piques",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep and Poisoned. If Budew is anywhere under Roselia, the Defending Pokémon is now Asleep and Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi et Empoisonné. Si Rozbouton se trouve sous Roselia, le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
