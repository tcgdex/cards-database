import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-161",
	localId: 161,

	// Card informations
	name: {
		en: "Lickitung",
		fr: "Excelangue",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 108,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/161/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/161/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/161/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/161/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "tetsuya koizumi",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Heavy Draw",
			fr: "Pioche Massive",
		},
		text: {
			en: "Draw a card for each of your Pokémon in play that has a Retreat Cost of exactly 4.",
			fr: "Piochez une carte pour chacun de vos Pokémon en jeu qui a un Coût de Retraite de 4.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tongue Slap",
			fr: "Gros Coup de Langue",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
