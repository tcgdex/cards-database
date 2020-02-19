import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-87",
	localId: 87,

	// Card informations
	name: {
		en: "Hydreigon BREAK",
		fr: "Trioxhydre TURBO",
	},

	hp: 190,

	type: [
		Type.DRAGON,
	],

	dexId: 635,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/87/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/87/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/87/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/87/high.png",
		},
	},

	evolveFrom: {
		en: "Hydreigon",
		fr: "Trioxhydre",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Calamity Blast",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "Discard 3 Energy attached to this Pokémon. This attack does 50 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 150
	},{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			fr: "Explo-Calamité",
		},
		text: {
			fr: "Défaussez 3 Énergies attachées à ce Pokémon. Cette attaque inflige 50 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],





	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

