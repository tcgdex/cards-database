import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-39",
	localId: 39,

	// Card informations
	name: {
		en: "Centiskorch",
		fr: "Scolocendre",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/39/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/39/low",
		}
	},

	evolveFrom: {
		en: "Sizzlipede",
		fr: "Grillepattes",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Anesaki Dynamic",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Hundred Foot Flames",
			fr: "Flammes Mille-Pattes",
		},
		text: {
			en: "For each Fire Energy attached to this Pokémon, discard the top card of your opponent’s deck.",
			fr: "Pour chaque Énergie Fire attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Searing Flame",
			fr: "Flammes Calcinantes",
		},
		text: {
			en: "Your opponent’s Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
