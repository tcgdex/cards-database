import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-57",
	localId: 57,

	// Card informations
	name: {
		en: "Armaldo",
		fr: "Armaldo",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],

	dexId: 348,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/57/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/57/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/57/high",
		},
	},

	evolveFrom: {
		en: "Anorith",
		fr: "Anorith",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 77,
		name: "Satoshi Shirai"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rushing Water",
			fr: "Courant Fort",
		},
		text: {
			en: "Move an Energy from your opponent's Active Pokémon to 1 of his or her Benched Pokémon.",
			fr: "Déplacez une Énergie attachée au Pokémon Actif de votre adversaire vers l’un de ses Pokémon de Banc.",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Guard Claw",
			fr: "Griffe de Garde",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 30 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
