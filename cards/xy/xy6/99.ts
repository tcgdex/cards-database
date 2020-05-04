import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-99",
	localId: 99,

	// Card informations
	name: {
		en: "Gallade-EX",
		fr: "Gallame-EX",
	},

	hp: 170,

	type: [
		Type.PSYCHIC,
	],

	dexId: 475,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/99/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/99/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Swift Lunge",
			fr: "Estocade",
		},
		text: {
			en: "You may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Piercing Prizes",
			fr: "Percée Récompense",
		},
		text: {
			en: "This attack does 20 more damage for each of your remaining Prize cards.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacune des cartes Récompense qu'il vous reste.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
