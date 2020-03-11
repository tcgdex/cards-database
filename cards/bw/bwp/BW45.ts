import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW45",
	localId: "BW45",

	// Card informations
	name: {
		en: "Mewtwo-EX",
		fr: "Mewtwo ex",
	},

	hp: 170,

	type: [
		Type.PSYCHIC,
	],

	dexId: 150,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW45/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW45/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW45/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Shizurow",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "X Ball",
			fr: "X Ball",
		},
		text: {
			en: "Does 20 damage times the amount of Energy attached to this Pokémon and the Defending Pokémon.",
			fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à ce Pokémon et au Pokémon Défenseur.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psydrive",
			fr: "Psykoforce",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
