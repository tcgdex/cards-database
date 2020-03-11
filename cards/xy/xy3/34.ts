import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-34",
	localId: 34,

	// Card informations
	name: {
		en: "Dedenne",
		fr: "Dedenne",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 702,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/34/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/34/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/34/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Entrainment",
			fr: "Ten-Danse",
		},
		text: {
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Short",
			fr: "Énergie Dérivée",
		},
		text: {
			en: "This attack does 20 damage times the amount of Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées au Pokémon Actif de votre adversaire.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
