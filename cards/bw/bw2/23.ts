import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-23",
	localId: 23,

	// Card informations
	name: {
		en: "Simipour",
		fr: "Flotoutan",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 516,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/23/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/23/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/23/high",
		},
	},

	evolveFrom: {
		en: "Panpour",
		fr: "Flotajou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Grass' Power",
			fr: "Pouvoir Fertilisant",
		},
		text: {
			en: "If this Pokémon has any Grass Energy attached to it, heal 20 damage from this Pokémon.",
			fr: "Si de l'Énergie Grass est attachée à ce Pokémon, soignez 20 dégâts à ce Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rushing Water",
			fr: "Courant Fort",
		},
		text: {
			en: "Move an Energy attached to the Defending Pokémon to 1 of your opponent's Benched Pokémon.",
			fr: "Déplacez une Énergie attachée au Pokémon Défenseur vers 1 des Pokémon de Banc de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
