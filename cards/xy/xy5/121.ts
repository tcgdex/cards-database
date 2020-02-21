import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-121",
	localId: 121,

	// Card informations
	name: {
		en: "Bunnelby",
		fr: "Sapereau",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 659,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/121/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/121/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/121/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},

	abilities: [{
		id: -1,
		type: AbilityType.ANCIENTTRAIT,
		name: {
			fr: "Offensive Ω",
		},
		text: {
			fr: "Ce Pokémon peut attaquer deux fois par tour. (Si la première attaque met K.O. le Pokémon Actif de votre adversaire, vous pouvez encore attaquer après que votre adversaire a choisi un nouveau Pokémon Actif.)",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Burrow",
			fr: "Terrier",
		},
		text: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rototiller",
			fr: "Fertilisation",
		},
		text: {
			en: "Shuffle a card from your discard pile into your deck.",
			fr: "Mélangez une carte de votre pile de défausse avec votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
