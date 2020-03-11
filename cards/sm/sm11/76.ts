import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-76",
	localId: 76,

	// Card informations
	name: {
		en: "Jynx",
		fr: "Lippoutou",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 124,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/76/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/76/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/76/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sowsow",

	abilities: [{
		id: 663,
		type: AbilityType.TALENT,
		name: {
			en: "Ominous Posture",
			fr: "Attitude Inquiétante",
		},
		text: {
			en: "Once during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another of your Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer un marqueur de dégâts de l’un de vos Pokémon vers un autre de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Attract Smack",
			fr: "Poutou Grisant",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
