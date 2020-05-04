import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-162",
	localId: 162,

	// Card informations
	name: {
		en: "Kecleon",
		fr: "Kecleon",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 352,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/162/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/162/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/162/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/162/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "OOYAMA",

	abilities: [{
		id: 1268,
		type: AbilityType.TALENT,
		name: {
			en: "Unit Color 3",
			fr: "Couleur Unitaire 3",
		},
		text: {
			en: "As long as this Pokémon has Unit Energy FightingDarknessFairy attached to it, it is a Fighting, Darkness, and Fairy Pokémon.",
			fr: "Tant que de l’Énergie Unitaire FightingDarknessFairy est attachée à ce Pokémon, c’est un Pokémon Fighting, Darkness et Fairy.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
