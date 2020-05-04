import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-3",
	localId: 3,

	// Card informations
	name: {
		en: "Meganium",
		fr: "Méganium",
	},

	hp: 150,

	type: [
		Type.GRASS,
	],

	dexId: 154,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/3/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/3/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/3/high",
		},
	},

	evolveFrom: {
		en: "Bayleef",
		fr: "Macronium",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "kawayoo",

	abilities: [{
		id: 450,
		type: AbilityType.TALENT,
		name: {
			en: "Overgrow",
			fr: "Engrais",
		},
		text: {
			en: "If this Pokémon's remaining HP is 50 or less, its attacks do 70 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "S'il reste 50 PV ou moins à ce Pokémon, ses attaques infligent 70 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Green Force",
			fr: "Force Verte",
		},
		text: {
			en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
