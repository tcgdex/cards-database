import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-19",
	localId: 19,

	// Card informations
	name: {
		en: "Lucario",
		fr: "Lucario",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/19/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/19/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/19/high",
		},
	},

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
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
			Type.COLORLESS
		],
		name: {
			en: "Bulk Up",
			fr: "Gonflette",
		},
		text: {
			en: "During your next turn, each of Lucario's attacks does 30 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
			fr: "Lors de votre prochain tour, chaque attaque de Lucario inflige 30 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Magnum Punch",
			fr: "Poing magnum",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
