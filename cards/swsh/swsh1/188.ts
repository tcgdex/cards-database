import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/swsh/swsh1/188/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/188/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/188/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/188/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.V,
	],

	illustrator: {
		id: 18,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		name: {
			en: "V rule",
			fr: "Règle V",
		},
	},{
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
		name: "undefined",
		code: "swsh1"
	}
}

export default card

