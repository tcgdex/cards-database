import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-56",
	localId: 56,

	// Card informations
	name: {
		en: "Shelgon",
		fr: "Drackhaus",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 372,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/56/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/56/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/56/high",
		},
	},

	evolveFrom: {
		en: "Bagon",
		fr: "Draby",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sui",

	abilities: [{
		id: 276,
		type: AbilityType.TALENT,
		name: {
			en: "Exoskeleton",
			fr: "Exosquelette",
		},
		text: {
			en: "Any damage done to this Pokémon by attacks is reduced by 10 (after applying Weakness and Resistance).",
			fr: "Tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
