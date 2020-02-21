import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-69",
	localId: 69,

	// Card informations
	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen",
	},

	hp: 140,

	type: [
		Type.PSYCHIC,
	],

	dexId: 31,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/69/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/69/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/69/high",
		},
	},

	evolveFrom: {
		en: "Nidorina",
		fr: "Nidorina",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 116,
		name: "PLANETA"
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
			Type.PSYCHIC
		],
		name: {
			en: "Poison Jab",
			fr: "Direct Toxik",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Dynamite Punch",
			fr: "Poing Dynamite",
		},
		text: {
			en: "This Pokémon does 20 damage to itself. Don't apply Weakness to this damage.",
			fr: "Ce Pokémon s'inflige 20 dégâts. Ne pas appliquer la Faiblesse à ces dégâts.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
