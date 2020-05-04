import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-51",
	localId: 51,

	// Card informations
	name: {
		en: "Golisopod",
		fr: "Sarmuraï",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 768,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/51/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/51/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/51/high",
		},
	},

	evolveFrom: {
		en: "Wimpod",
		fr: "Sovkipou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 1390,
		type: AbilityType.TALENT,
		name: {
			en: "Emergency Exit",
			fr: "Repli Tactique",
		},
		text: {
			en: "If this Pokémon has 2 or fewer Energy attached to it, it has no Retreat Cost.",
			fr: "Si 2 Énergies ou moins sont attachées à ce Pokémon, il n’a pas de Coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "First Impression",
			fr: "Escarmouche",
		},
		text: {
			en: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 60 more damage.",
			fr: "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
