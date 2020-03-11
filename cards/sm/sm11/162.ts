import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-162",
	localId: 162,

	// Card informations
	name: {
		en: "Lickilicky",
		fr: "Coudlangue",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 463,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/162/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/162/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/162/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/162/high",
		},
	},

	evolveFrom: {
		en: "Lickitung",
		fr: "Excelangue",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Licks Go Crazy",
			fr: "Langue Acérée",
		},
		text: {
			en: "Discard a random card from your opponent's hand, discard the top card of your opponent's deck, and discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire, défaussez la carte du dessus du deck de votre adversaire, et défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
