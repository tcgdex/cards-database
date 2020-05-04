import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-4",
	localId: 4,

	// Card informations
	name: {
		en: "Cradily",
		fr: "Vacilys",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 346,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/4/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/4/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/4/high",
		},
	},

	evolveFrom: {
		en: "Lileep",
		fr: "Lilia",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Lifesplosion",
			fr: "Explovie",
		},
		text: {
			en: "For each Energy attached to this Pokémon, search your deck for a Stage 2 Pokémon and put it onto your Bench. Shuffle your deck afterward.",
			fr: "Pour chaque Énergie attachée à ce Pokémon, cherchez un Pokémon de Niveau 2 dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Drain",
			fr: "Spirale Épuisante",
		},
		text: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon.",
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

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
