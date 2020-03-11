import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-35",
	localId: 35,

	// Card informations
	name: {
		en: "Cinderace",
		fr: "Pyrobut",
	},

	hp: 170,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/35/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/35/low",
		}
	},

	evolveFrom: {
		en: "Raboot",
		fr: "Lapyro",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Pyro Ball",
			fr: "Ballon Brûlant",
		},
		text: {
			en: "Your opponent’s Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Burning Kick",
			fr: "Coup de Pied Brûlant",
		},
		text: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toute l’Énergie de ce Pokémon.",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
