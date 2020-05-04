import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-22",
	localId: 22,

	// Card informations
	name: {
		en: "Camerupt",
		fr: "Camérupt",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 323,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/22/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/22/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/22/high",
		},
	},

	evolveFrom: {
		en: "Numel",
		fr: "Chamallot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fire Shard",
			fr: "Écharde de Feu",
		},
		text: {
			en: "The Defending Pokémon is now Burned. Flip a coin. If heads, the Defending Pokémon is also Paralyzed.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé. Lancez une pièce. Si c'est face, le Pokémon Défenseur est aussi Paralysé.",
		},
		damage: 60
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
			fr: "Lance-Flamme",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
