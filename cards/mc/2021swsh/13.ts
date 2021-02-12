import Card from "@tcgdex/sdk/interfaces/Card";
import Tag from "@tcgdex/sdk/interfaces/Tag";
import Category from "@tcgdex/sdk/interfaces/Category";
import Type from "@tcgdex/sdk/interfaces/Type";
import Rarity from "@tcgdex/sdk/interfaces/Rarity";
import set from '../../../sets/mc/2021swsh'

const card: Card = {

	// ids
	id: "2021swsh-13",
	localId: 13,

	// Card informations
	name: {
		en: "Tepig",
		fr: "Gruikui",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 498,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW02/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW02/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW02/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW02/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Ember",
			fr: "Flammèche",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: set
}

export default card
