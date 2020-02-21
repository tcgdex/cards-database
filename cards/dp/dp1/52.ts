import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-52",
	localId: 52,

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
			en: "https://assets.tcgdex.net/en/dp/dp1/52/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/52/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/52/high",
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
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fasten Claws",
			fr: "Griffes accrochantes",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Thunder Fang",
			fr: "Crocs Éclair",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
