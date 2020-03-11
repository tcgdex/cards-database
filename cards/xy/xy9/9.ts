import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-9",
	localId: 9,

	// Card informations
	name: {
		en: "Durant",
		fr: "Fermite",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 632,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/9/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/9/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Mountain Munch",
			fr: "Dévore-Montagne",
		},
		text: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Scrape Down",
			fr: "Racleur",
		},
		text: {
			en: "If this Pokémon has any damage counters on it, discard the top 4 cards of your opponent's deck.",
			fr: "Si ce Pokémon a des marqueurs de dégâts, défaussez les 4 cartes du dessus du deck de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
