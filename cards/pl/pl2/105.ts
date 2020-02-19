import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-105",
	localId: 105,

	// Card informations
	name: {
		en: "Flygon",
		fr: "Libegon Niv. X",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 330,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/105/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/105/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/105/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/105/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},

	abilities: [{
		id: 477,
		type: AbilityType.POKEBODY,
		name: {
			en: "Wind Erosion",
			fr: "Érosion venteuse",
		},
		text: {
			en: "As long as Flygon is your Active Pokémon, discard the top card from your opponent's deck between turns.",
			fr: "Tant que Libegon est votre Pokémon Actif, défaussez la carte du dessus du deck de votre adversaire entre deux tours.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Extreme Attack",
			fr: "Attaque extrême",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon LV.X. This attack does 150 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon LV.X de votre adversaire. Cette attaque lui inflige 150 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],



	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

