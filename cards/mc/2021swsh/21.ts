import Card from "@tcgdex/sdk/interfaces/Card";
import Tag from "@tcgdex/sdk/interfaces/Tag";
import Category from "@tcgdex/sdk/interfaces/Category";
import Type from "@tcgdex/sdk/interfaces/Type";
import Rarity from "@tcgdex/sdk/interfaces/Rarity";
import set from '../../../sets/mc/2021swsh'

const card: Card = {

	// ids
	id: "2021swsh-21",
	localId: 21,

	// Card informations
	name: {
		en: "Oshawott",
		fr: "Moustillon",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 501,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW03/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW03/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW03/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW03/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: set
}

export default card
