import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-26",
	localId: 26,

	// Card informations
	name: {
		en: "Torchic",
		fr: "Poussifeu",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 255,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/26/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/26/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/26/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
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
			Type.FIRE
		],
		name: {
			en: "Flare Bonus",
			fr: "Fulmi-Bonus",
		},
		text: {
			en: "Discard a Fire Energy card from your hand. If you do, draw 2 cards.",
			fr: "Défaussez une carte Énergie Fire de votre main. Dans ce cas, piochez 2 cartes.",
		},
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Claw",
			fr: "Ergots",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
