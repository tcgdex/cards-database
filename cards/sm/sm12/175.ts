import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-175",
	localId: 175,

	// Card informations
	name: {
		en: "Herdier",
		fr: "Ponchien",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 507,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/175/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/175/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/175/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/175/high",
		},
	},

	evolveFrom: {
		en: "Lillipup",
		fr: "Ponchiot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Work Up",
			fr: "Rengorgement",
		},
		text: {
			en: "During your next turn, this Pokémon's attacks do 60 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, les attaques de ce Pokémon infligent 60 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Headbutt Bounce",
			fr: "Culbute Surprise",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
