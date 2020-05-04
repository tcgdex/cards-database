import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-90",
	localId: 90,

	// Card informations
	name: {
		en: "Eevee",
		fr: "Évoli",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 133,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/90/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/90/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Signs of Evolution",
			fr: "Signes d'Évolution",
		},
		text: {
			en: "Search your deck for 3 Pokémon of different types that evolve from Eevee. Reveal them and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck 3 Pokémon de différents types qui sont une évolution d'Évoli. Montrez-les puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
