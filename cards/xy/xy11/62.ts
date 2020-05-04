import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-62",
	localId: 62,

	// Card informations
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 442,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/62/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/62/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Nightmare",
			fr: "Cauchemar",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Damage Play",
			fr: "Jeu de Dégâts",
		},
		text: {
			en: "Move as many damage counters on your opponent's Benched Pokémon as you like to any of your opponent's other Pokémon in any way you like.",
			fr: "Déplacez autant de marqueurs de dégâts que vous voulez des Pokémon de Banc de votre adversaire vers les autres Pokémon de votre adversaire, de la manière que vous voulez.",
		},
	}],





	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
