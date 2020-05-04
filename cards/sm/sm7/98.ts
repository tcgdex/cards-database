import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-98",
	localId: 98,

	// Card informations
	name: {
		en: "Heatran",
		fr: "Heatran",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 485,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/98/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/98/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/98/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Steelworks",
			fr: "Aciérie",
		},
		text: {
			en: "Look at the top 4 cards of your deck and attach any number of Metal Energy cards you find there to 1 of your Pokémon. Shuffle the other cards back into your deck.",
			fr: "Regardez les 4 cartes du dessus de votre deck et attachez le nombre désiré de cartes Énergie Metal que vous y trouverez à l’un de vos Pokémon. Mélangez les autres cartes avec votre deck.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Steel Tackle",
			fr: "Charge d’Acier",
		},
		text: {
			en: "This Pokémon does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige 30 dégâts.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
