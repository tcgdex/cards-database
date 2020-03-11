import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-56",
	localId: 56,

	// Card informations
	name: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 391,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/56/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/56/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/56/high",
		},
	},

	evolveFrom: {
		en: "Chimchar",
		fr: "Ouisticram",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fire Tail Slap",
			fr: "Coup de queue enflammé",
		},
		text: {
			en: "Flip a coin. If tails, discard a Fire Energy attached to Monferno.",
			fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à Chimpenfeu.",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Paralyzing Gaze",
			fr: "Regard paralysant",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
