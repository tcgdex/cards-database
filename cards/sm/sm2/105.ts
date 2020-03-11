import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-105",
	localId: 105,

	// Card informations
	name: {
		en: "Castform",
		fr: "Morphéo",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 351,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/105/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/105/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/105/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Weather Teller",
			fr: "Cartomancien",
		},
		text: {
			en: "Search your deck for up to 2 Stadium cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 2 cartes Stade dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
