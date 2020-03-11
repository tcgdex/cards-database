import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM103",
	localId: "SM103",

	// Card informations
	name: {
		en: "Lunala-GX",
		fr: "Lunala-GX",
	},

	hp: 230,

	type: [
		Type.PSYCHIC,
	],

	dexId: 792,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM103/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM103/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM103/high",
		},
	},

	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	tags: [
		Tag.GX,
		Tag.STAGE2,
	],

	illustrator: "PLANETA",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Glide",
			fr: "Glissement",
		},
		damage: 50
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lunar Javelin",
			fr: "Javelot Lunaire",
		},
		text: {
			en: "Discard 2 Psychic Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies Psychic de ce Pokémon.",
		},
		damage: 200
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Requiem GX",
			fr: "Requiem-GX",
		},
		text: {
			en: "(You can't use more than 1 GX attack in a game.)",
			fr: "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 250
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
