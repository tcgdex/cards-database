import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-96",
	localId: 96,

	// Card informations
	name: {
		en: "Registeel",
		fr: "Registeel",
	},

	hp: 120,

	type: [
		Type.METAL,
	],

	dexId: 379,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/96/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/96/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",

	abilities: [{
		id: 276,
		type: AbilityType.TALENT,
		name: {
			en: "Exoskeleton",
			fr: "Exosquelette",
		},
		text: {
			en: "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Silver Fist",
			fr: "Poing Argenté",
		},
		text: {
			en: "If your opponent's Active Pokémon has an Ability, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a un talent, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
