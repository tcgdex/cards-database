import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-52",
	localId: 52,

	// Card informations
	name: {
		en: "Dragonair",
		fr: "Draco",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 148,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/52/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/52/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/52/high",
		},
	},

	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wrap",
			fr: "Ligotage",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rising Lunge",
			fr: "Botte secrète",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
