import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-87",
	localId: 87,

	// Card informations
	name: {
		en: "Skarmory",
		fr: "Airmure",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 227,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/87/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/87/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/87/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/87/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cargo Jet",
			fr: "Aérocargo",
		},
		text: {
			en: "Discard a Team Plasma card from your hand. If you do, draw 3 cards.",
			fr: "Défaussez une carte de la Team Plasma de votre main. Dans ce cas, piochez 3 cartes.",
		},
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Steel Wing",
			fr: "Aile d'Acier",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card

