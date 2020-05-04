import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-10",
	localId: 10,

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
			en: "https://assets.tcgdex.net/en/sm/sm1/10/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/10/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/10/high",
		},
	},

	evolveFrom: {
		en: "Rowlet",
		fr: "Brindibou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mizue",



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

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
