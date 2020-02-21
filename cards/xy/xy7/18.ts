import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-18",
	localId: 18,

	// Card informations
	name: {
		en: "Volcarona",
		fr: "Pyrax",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 637,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/18/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/18/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/18/high",
		},
	},

	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Burning Scales",
			fr: "Stop Θ",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wind Wheel",
			fr: "Écailles Enflammées",
		},
		text: {
			en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 80
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Roue Éolienne",
		},
		text: {
			fr: "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
