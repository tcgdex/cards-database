import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-13",
	localId: 13,

	// Card informations
	name: {
		en: "Quilladin",
		fr: "Boguérisse",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 651,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/13/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/13/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/13/high",
		},
	},

	evolveFrom: {
		en: "Chespin",
		fr: "Marisson",
	},

	tags: [
		Tag.STAGE1,
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
			en: "Scrunch",
			fr: "Compresse",
		},
		text: {
			en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Wood Hammer",
			fr: "Martobois",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige 10 dégâts.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
