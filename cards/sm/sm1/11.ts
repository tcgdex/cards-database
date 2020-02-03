import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-11",
	localId: 11,

	// Card informations
	name: {
		en: "Decidueye",
		fr: "Archéduc",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 724,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/11/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/11/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/11/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/11/high.png",
		},
	},

	evolveFrom: {
		en: "Dartrix",
		fr: "Efflèche",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Leaf Blade",
			fr: "Lame-Feuille",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Brave Bird",
			fr: "Rapace",
		},
		text: {
			en: "This Pokémon does 20 damage to itself.",
			fr: "Ce Pokémon s’inflige 20 dégâts.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

