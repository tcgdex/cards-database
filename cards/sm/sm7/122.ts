import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-122",
	localId: 122,

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
			en: "https://assets.tcgdex.net/en/sm/sm7/122/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/122/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/122/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "OOYAMA",

	abilities: [{
		id: 1179,
		type: AbilityType.TALENT,
		name: {
			en: "Unit Color 2",
			fr: "Couleur Unitaire 2",
		},
		text: {
			en: "As long as this Pokémon has Unit Energy LightningPsychicMetal attached to it, it is a Lightning, Psychic, and Metal Pokémon.",
			fr: "Tant que de l’Énergie Unitaire LightningPsychicMetal est attachée à ce Pokémon, c’est un Pokémon Lightning, Psychic et Metal.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
