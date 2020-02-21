import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-12",
	localId: 12,

	// Card informations
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 547,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/12/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/12/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/12/high",
		},
	},

	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Encore",
			fr: "Encore",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. During your opponent's next turn, that Pokémon can use only that attack.",
			fr: "Choisissez 1 des attaques du Pokémon Défenseur. Pendant le prochain tour de votre adversaire, le Pokémon ciblé ne peut utiliser que l'attaque choisie.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "U-turn",
			fr: "Demi-Tour",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
