import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-11",
	localId: 11,

	// Card informations
	name: {
		en: "Leafeon",
		fr: "Phyllali",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 470,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/11/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/11/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/11/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Crush",
			fr: "Écras'Énergie",
		},
		text: {
			en: "Does 20 damage times the amount of Energy attached to all of your opponent's Pokémon.",
			fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à tous les Pokémon de votre adversaire.",
		},
		damage: 20
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
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
