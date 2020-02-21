import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-81",
	localId: 81,

	// Card informations
	name: {
		en: "Medicham",
		fr: "Charmina",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 308,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/81/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/81/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/81/high",
		},
	},

	evolveFrom: {
		en: "Meditite",
		fr: "Méditikka",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
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
			en: "Calm Mind",
			fr: "Plénitude",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Yoga Kick",
			fr: "Yoga Kick",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
