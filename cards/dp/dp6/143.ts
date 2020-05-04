import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-143",
	localId: 143,

	// Card informations
	name: {
		en: "Mesprit",
		fr: "Créfollet",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 481,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/143/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/143/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/143/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/143/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",



	attacks: [{
		name: {
			en: "Healing Look",
			fr: "Regard guérisseur",
		},
		text: {
			en: "Remove 3 damage counters from each of your Benched Pokémon.",
			fr: "Retirez à chacun de vos Pokémon de Banc 3 marqueurs de dégât.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Supreme Blast",
			fr: "Explosion suprême",
		},
		text: {
			en: "If you don't have Uxie LV.X and Azelf LV.X in play, this attack does nothing. Discard all Energy attached to Mesprit.",
			fr: "Si vous n'avez pas de Créhelf NIV.X et Créfadet NIV.X en jeu, cette attaque est sans effet. Défaussez toutes les Énergies attachées à Créfollet.",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
