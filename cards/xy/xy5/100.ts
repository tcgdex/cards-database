import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-100",
	localId: 100,

	// Card informations
	name: {
		en: "Aegislash",
		fr: "Exagide",
	},

	hp: 140,

	type: [
		Type.METAL,
	],

	dexId: 681,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/100/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/100/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/100/high",
		},
	},

	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 1305,
		type: AbilityType.TALENT,
		name: {
			en: "Miracle Guard",
			fr: "Garde Miracle",
		},
		text: {
			en: "Each of your Pokémon has no Weakness.",
			fr: "Aucun de vos Pokémon n'a de Faiblesse.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Protect Charge",
			fr: "Recharge Protectrice",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
