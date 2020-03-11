import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-132",
	localId: 132,

	// Card informations
	name: {
		en: "Articuno-EX",
		fr: "Artikodin-EX",
	},

	hp: 170,

	type: [
		Type.WATER,
	],

	dexId: 144,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/132/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/132/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/132/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/132/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blizzard",
			fr: "Blizzard",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Frost Prison",
			fr: "Prison de Givre",
		},
		text: {
			en: "If this Pokémon has any Plasma Energy attached to it, the Defending Pokémon is now Paralyzed.",
			fr: "Si de l'Énergie Plasma est attachée à ce Pokémon, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
