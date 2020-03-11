import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW46",
	localId: "BW46",

	// Card informations
	name: {
		en: "Darkrai-EX",
		fr: "Darkrai ex",
	},

	hp: 180,

	type: [
		Type.DARKNESS,
	],

	dexId: 491,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW46/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW46/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 261,
		type: AbilityType.TALENT,
		name: {
			en: "Dark Cloak",
			fr: "Cape Obscure",
		},
		text: {
			en: "Each of your Pokémon that has any Darkness Energy attached to it has no Retreat Cost.",
			fr: "Chacun de vos Pokémon auquel de l'Énergie Darkness est attachée n'a pas de coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Night Spear",
			fr: "Javelot Nocturne",
		},
		text: {
			en: "Does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
