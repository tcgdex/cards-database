import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-12",
	localId: 12,

	// Card informations
	name: {
		en: "Swampert",
		fr: "Laggron",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 260,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/12/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/12/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/12/high",
		},
	},

	evolveFrom: {
		en: "Marshtomp",
		fr: "Flobio",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 1113,
		type: AbilityType.POKEBODY,
		name: {
			en: "Root Protector",
			fr: "Protège-racine",
		},
		text: {
			en: "Any damage done to Swampert by attacks from your opponent's Pokémon that isn't an Evolved Pokémon is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Tous les dégâts infligés à Laggron par les attaques du Pokémon de votre adversaire sont réduits de 20 si ce n'est pas un Pokémon Évolué (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Drag Off",
			fr: "Traîne",
		},
		text: {
			en: "Before doing damage, you may switch your opponent's Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Avant d'infliger des dégâts, vous pouvez échanger le Pokémon Actif de votre adversaire avec 1 de ses Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Push Over",
			fr: "Facilité",
		},
		text: {
			en: "Does 60 damage plus 10 more damage for each Fighting Energy attached to Swampert.",
			fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Fighting attachée à Laggron.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
