import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-60",
	localId: 60,

	// Card informations
	name: {
		en: "Gurdurr",
		fr: "Ouvrifier",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 533,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/60/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/60/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/60/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/60/high.png",
		},
	},

	evolveFrom: {
		en: "Timburr",
		fr: "Charpenti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bulk Up",
			fr: "Gonflette",
		},
		text: {
			en: "During your next turn, each of this Pokémon's attacks does 20 more damage (before applying Weakness and Resistance).",
			fr: "Lors de votre prochain tour, chaque attaque de ce Pokémon inflige 20 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Pound",
			fr: "Écras'Face",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card

