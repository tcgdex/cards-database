import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW20",
	localId: "BW20",

	// Card informations
	name: {
		en: "Serperior",
		fr: "Majaspic",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 497,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW20/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW20/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW20/high",
		},
	},

	evolveFrom: {
		en: "Servine",
		fr: "Lianaja",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 372,
		type: AbilityType.TALENT,
		name: {
			en: "Royal Heal",
		},
		text: {
			en: "At any time between turns, heal 10 damage from each of your Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Tornado",
			fr: "Phytomixeur",
		},
		text: {
			en: "Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like.",
			fr: "Déplacez autant d’Énergies Grass attachées à vos Pokémon que vous voulez vers vos autres Pokémon, de la manière que vous voulez.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
