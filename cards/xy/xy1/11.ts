import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-11",
	localId: 11,

	// Card informations
	name: {
		en: "Simisage",
		fr: "Feuiloutan",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 512,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/11/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/11/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/11/high",
		},
	},

	evolveFrom: {
		en: "Pansage",
		fr: "Feuillajou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Torment",
			fr: "Tourmente",
		},
		text: {
			en: "Choose 1 of your opponent's Active Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
			fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire. Ce dernier ne peut pas utiliser l'attaque choisie pendant le prochain tour de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
