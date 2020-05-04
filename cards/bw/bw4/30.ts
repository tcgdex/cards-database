import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-30",
	localId: 30,

	// Card informations
	name: {
		en: "Basculin",
		fr: "Bargantua",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 550,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/30/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/30/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 10
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Bared Fangs",
			fr: "Crocs à Vif",
		},
		text: {
			en: "If, before this Pokémon does damage, the Defending Pokémon has no damage counters on it, this attack does nothing.",
			fr: "Si, avant que ce Pokémon inflige des dégâts, le Pokémon Défenseur n'a aucun marqueur de dégâts, cette attaque ne fait rien.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
