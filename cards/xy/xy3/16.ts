import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-16",
	localId: 16,

	// Card informations
	name: {
		en: "Poliwhirl",
		fr: "Têtarte",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 61,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/16/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/16/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/16/high",
		},
	},

	evolveFrom: {
		en: "Poliwag",
		fr: "Ptitard",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Finishing Blow",
			fr: "Coup de Grâce",
		},
		text: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 50 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
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
