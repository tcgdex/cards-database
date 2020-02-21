import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-44",
	localId: 44,

	// Card informations
	name: {
		en: "Luxio",
		fr: "Luxio",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 404,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/44/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/44/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/44/high",
		},
	},

	evolveFrom: {
		en: "Shinx",
		fr: "Lixy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Jump On",
			fr: "Saut",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wild Charge",
			fr: "Éclair Fou",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige 10 dégâts.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
