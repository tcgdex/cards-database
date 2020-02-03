import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-42",
	localId: 42,

	// Card informations
	name: {
		en: "Primarina-GX",
		fr: "Oratoria-GX",
	},

	hp: 250,

	type: [
		Type.WATER,
	],

	dexId: 730,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/42/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/42/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/42/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/42/high.png",
		},
	},

	evolveFrom: {
		en: "Brionne",
		fr: "Otarlette",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bubble Beat",
			fr: "Bulle Bataille",
		},
		text: {
			en: "This attack does 20 more damage times the amount of Water Energy attached to your Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à vos Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Roaring Seas",
			fr: "Flots Rugissants",
		},
		text: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 120
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Grand Echo-GX",
			fr: "Écho Majestueux-GX",
		},
		text: {
			en: "Heal all damage from all of your Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Soignez tous les dégâts de vos Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

