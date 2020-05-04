import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-3",
	localId: 3,

	// Card informations
	name: {
		en: "Drifblim FB",
		fr: "Grodrive ",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 426,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/3/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/3/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/3/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Lee HyunJung",

	abilities: [{
		id: 1112,
		type: AbilityType.POKEBODY,
		name: {
			en: "Pump Up",
			fr: "Regonfler",
		},
		text: {
			en: "If your opponent has 3 or less Prize cards left, Drifblim FB gets +40 HP.",
			fr: "S'il ne reste pas plus de 3 cartes Récompense à votre adversaire, Grodrive  obtient 40 PV supplémentaires.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Ball",
			fr: "Ball'ombre",
		},
		text: {
			en: "Choose 1 of your opponent's Benched Pokémon. This attack does 40 damage to that Pokémon. Apply Weakness and Resistance.",
			fr: "Choisissez 1 des Pokémon de Banc de votre adversaire. Cette attaque lui inflige 40 dégâts. Appliquez la Faiblesse et la Résistance.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
