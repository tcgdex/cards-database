import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-66",
	localId: 66,

	// Card informations
	name: {
		en: "Palkia-EX",
		fr: "Palkia ex",
	},

	hp: 180,

	type: [
		Type.DRAGON,
	],

	dexId: 484,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/66/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/66/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/66/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/66/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strafe",
			fr: "Rase-Motte",
		},
		text: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon avec 1 de vos Pokémon de Banc.",
		},
		damage: 50
	},{
		cost: [
			Type.GRASS,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dimension Heal",
			fr: "Soin Dimensionnel",
		},
		text: {
			en: "Heal from this Pokémon 20 damage for each Plasma Energy attached to this Pokémon.",
			fr: "Soignez à ce Pokémon 20 dégâts pour chaque Énergie Plasma attachée à ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card

