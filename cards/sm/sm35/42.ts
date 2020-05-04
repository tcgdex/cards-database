import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-42",
	localId: 42,

	// Card informations
	name: {
		en: "Shining Jirachi",
		fr: "Jirachi Brillant",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 385,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/42/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/42/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/42/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Stellar Reign",
			fr: "Règne Stellaire",
		},
		text: {
			en: "If your opponent's Active Pokémon is an evolved Pokémon, devolve it by putting all of the Evolution cards on it into your opponent's hand.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon évolué, faites-le dés-évoluer en mettant toutes les cartes Évolution placées dessus dans la main de votre adversaire.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
