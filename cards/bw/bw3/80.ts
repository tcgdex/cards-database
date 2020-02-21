import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-80",
	localId: 80,

	// Card informations
	name: {
		en: "Escavalier",
		fr: "Lançargot",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 589,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/80/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/80/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/80/high",
		},
	},

	evolveFrom: {
		en: "Karrablast",
		fr: "Carabing",
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
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 40
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Twineedle",
			fr: "Double-Dard",
		},
		text: {
			en: "Flip 2 coins. This attack does 70 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 70 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
