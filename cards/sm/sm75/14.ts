import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-14",
	localId: 14,

	// Card informations
	name: {
		en: "Salazzle",
		fr: "Malamandre",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 758,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/14/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/14/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/14/high",
		},
	},

	evolveFrom: {
		en: "Salandit",
		fr: "Tritox",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Ring of Fire",
			fr: "Anneau de Feu",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned. It can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé. Il ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
