import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-45",
	localId: 45,

	// Card informations
	name: {
		en: "Cherrim",
		fr: "Ceriflor",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 421,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/45/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/45/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/45/high",
		},
	},

	evolveFrom: {
		en: "Cherubi",
		fr: "Ceribou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Worry Seed",
			fr: "Soucigraine",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Magical Leaf",
			fr: "Feuillemagik",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage and remove 3 damage counters from Cherrim.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires et retirez à Ceriflor 3 marqueurs de dégât.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
