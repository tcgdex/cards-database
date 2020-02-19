import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-101",
	localId: 101,

	// Card informations
	name: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 790,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/101/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/101/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/101/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/101/high.png",
		},
	},

	evolveFrom: {
		en: "Cosmog",
		fr: "Cosmog",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Stiffen",
			fr: "Raidissement",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 40 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 40 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

