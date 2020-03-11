import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-46",
	localId: 46,

	// Card informations
	name: {
		en: "Marshtomp",
		fr: "Flobio",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 259,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/46/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/46/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/46/high",
		},
	},

	evolveFrom: {
		en: "Mudkip",
		fr: "Gobou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pound",
			fr: "Écras'face",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Muddy Bomb",
			fr: "Bombe boueuse",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon and 10 damage to each of your opponent's other Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts et inflige 10 dégâts à chacun de ses autres Pokémon. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc).",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
