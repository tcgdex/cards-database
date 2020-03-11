import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-188",
	localId: 188,

	// Card informations
	name: {
		en: "Torkoal V",
		fr: "Chartor V",
	},

	hp: 210,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/188/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/188/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.V,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Combustion Pillar",
			fr: "Pilastre de Combustion",
		},
		text: {
			en: "Discard the top card of your deck. If that card is a Fire Energy card, this attack does 90 more damage.",
			fr: "Défaussez la carte du dessus de votre deck. Si cette carte-là est une carte Énergie Fire, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: "90+"
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Steam Crush",
			fr: "Écrasement Vapeur",
		},
		text: {
			en: "Discard 2 Energy from your opponent’s Active Pokémon.",
			fr: "Défaussez 2 Énergies du Pokémon Actif de votre adversaire.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
