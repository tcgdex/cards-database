import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-36",
	localId: 36,

	// Card informations
	name: {
		en: "Hypno",
		fr: "Hypnomade",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 97,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/36/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/36/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/36/high",
		},
	},

	evolveFrom: {
		en: "Drowzee",
		fr: "Soporifik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hand Control",
			fr: "Main Contrôlée",
		},
		text: {
			en: "Your opponent reveals his or her hand. You may choose a Supporter card you find there. If you do, your opponent plays that Supporter card. However, you make all decisions for that card. (That Supporter card is discarded.)",
			fr: "Votre adversaire montre sa main. Vous pouvez choisir une carte Supporter que vous y trouvez. Dans ce cas, votre adversaire joue la carte Supporter. Cependant, vous prenez toutes les décisions relatives à la carte. (La carte Supporter est défaussée.)",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
