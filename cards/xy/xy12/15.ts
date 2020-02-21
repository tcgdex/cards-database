import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-15",
	localId: 15,

	// Card informations
	name: {
		en: "Ninetales",
		fr: "Feunard",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 38,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/15/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/15/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/15/high",
		},
	},

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Lure",
			fr: "Leurre",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon. The new Active Pokémon can't retreat during your opponent's next turn.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Blast",
			fr: "Déflagration",
		},
		text: {
			en: "Discard a Fire Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie Fire attachée à ce Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
