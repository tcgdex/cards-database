import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-17",
	localId: 17,

	// Card informations
	name: {
		en: "Torterra",
		fr: "Torterra",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 389,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/17/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/17/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/17/high",
		},
	},

	evolveFrom: {
		en: "Grotle",
		fr: "Boskara",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masahiko Ishii",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Body Slam",
			fr: "Plaquage",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Storm",
			fr: "Tempêteverte",
		},
		text: {
			en: "Remove 2 damage counters from each of your Grass Pokémon.",
			fr: "Retirez 2 marqueurs de dégât à chacun de vos Pokémon Grass.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
