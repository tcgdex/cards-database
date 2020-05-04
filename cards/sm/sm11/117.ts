import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-117",
	localId: 117,

	// Card informations
	name: {
		en: "Lucario",
		fr: "Lucario",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/117/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/117/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/117/high",
		},
	},

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kirisAki",

	abilities: [{
		id: 1396,
		type: AbilityType.TALENT,
		name: {
			en: "Tag Coach",
			fr: "Coaching d’Escouade",
		},
		text: {
			en: "Your TAG TEAM Pokémon take 20 less damage from your opponent's attacks (after applying Weakness and Resistance).",
			fr: "Vos Pokémon ESCOUADE subissent 20 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mach Cross",
			fr: "Passage Éclair",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
