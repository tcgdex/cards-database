import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW55",
	localId: "BW55",

	// Card informations
	name: {
		en: "Elgyem",
		fr: "Lewsor",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 605,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW55/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW55/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mizue",

	abilities: [{
		id: 1096,
		type: AbilityType.TALENT,
		name: {
			en: "Weak Barrier",
			fr: "Bouclier Faiblesse",
		},
		text: {
			en: "If this Pokémon has any Psychic Energy attached to it, this Pokémon has no Weakness.",
			fr: "Si de l'Énergie Psychic est attachée à ce Pokémon, ce Pokémon n'a pas de Faiblesse.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Blow",
			fr: "Coup d'Poing Éclair",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
