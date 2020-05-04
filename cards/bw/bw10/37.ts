import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-37",
	localId: 37,

	// Card informations
	name: {
		en: "Mesprit",
		fr: "Créfollet",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 481,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/37/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/37/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 836,
		type: AbilityType.TALENT,
		name: {
			en: "Mental Shroud",
			fr: "Écran Mental",
		},
		text: {
			en: "If you have Uxie and Azelf in play, each of your Pokémon has no Weakness.",
			fr: "Si vous avez Créhelf et Créfadet en jeu, chacun de vos Pokémon n'a pas de Faiblesse.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
