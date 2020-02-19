import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-47",
	localId: 47,

	// Card informations
	name: {
		en: "Dusclops",
		fr: "Teraclope",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 356,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/47/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/47/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/47/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/47/high.png",
		},
	},

	evolveFrom: {
		en: "Duskull",
		fr: "Skélénox",
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
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Roam",
			fr: "Égarement",
		},
		text: {
			en: "Flip a coin. If heads, put 2 damage counters on each of your opponent's Pokémon. If tails, put 2 damage counters on 1 of your Pokémon.",
			fr: "Lancez une pièce. Si c'est face, placez 2 marqueurs de dégât sur chacun des Pokémon de votre adversaire. Si c'est pile, placez 2 marqueurs de dégât sur 1 de vos Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Gravity Wave",
			fr: "Vague pesante",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Benched Pokémon that doesn't have a Retreat Cost. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun de vos Pokémon de Banc ne possédant pas de Coût de retraite. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.COLORLESS,
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

