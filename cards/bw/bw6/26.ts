import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-26",
	localId: 26,

	// Card informations
	name: {
		en: "Wailord",
		fr: "Wailord",
	},

	hp: 200,

	type: [
		Type.WATER,
	],

	dexId: 321,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/26/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/26/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/26/high",
		},
	},

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Cannon",
			fr: "Canon à O",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage times the amount of Water Energy attached to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies Water attachées à ce Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giant Wave",
			fr: "Vague Géante",
		},
		text: {
			en: "This Pokémon can't use Giant Wave during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Vague Géante pendant votre prochain tour.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
