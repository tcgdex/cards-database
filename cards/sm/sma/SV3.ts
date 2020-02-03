import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV3",
	localId: "SV3",

	// Card informations
	name: {
		en: "Dartrix",
		fr: "Efflèche",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 723,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV3/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV3/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV3/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV3/high.png",
		},
	},

	evolveFrom: {
		en: "Rowlet",
		fr: "Brindibou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sharp Blade Quill",
			fr: "Plum’acérée Tranchante",
		},
		text: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Blade",
			fr: "Lame-Feuille",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card

