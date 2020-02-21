import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-28",
	localId: 28,

	// Card informations
	name: {
		en: "Cubchoo",
		fr: "Polarhume",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 613,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/28/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/28/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/28/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Powder Snow",
			fr: "Poudreuse",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rest",
			fr: "Repos",
		},
		text: {
			en: "Heal 60 damage from this Pokémon. This Pokémon is now Asleep.",
			fr: "Soignez 60 dégâts à ce Pokémon. Ce Pokémon est maintenant Endormi.",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
