import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-10",
	localId: 10,

	// Card informations
	name: {
		en: "Leavanny",
		fr: "Manternel",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 542,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/10/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/10/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/10/high",
		},
	},

	evolveFrom: {
		en: "Swadloon",
		fr: "Couverdure",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cleave",
			fr: "Frappe Adhésive",
		},
		text: {
			en: "Flip 2 coins. If both of them are heads, discard all Energy attached to the Defending Pokémon.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, défaussez toutes les Énergies attachées au Pokémon Défenseur.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
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
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
