import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-3",
	localId: 3,

	// Card informations
	name: {
		en: "Vileplume",
		fr: "Rafflesia",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 45,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/3/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/3/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/3/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/3/high.png",
		},
	},

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 1173,
		type: AbilityType.TALENT,
		name: {
			en: "Irritating Pollen",
			fr: "Pollen Irritant",
		},
		text: {
			en: "Each player can't play any Item cards from his or her hand.",
			fr: "Aucun joueur ne peut jouer de cartes Objet de sa main.",
		}
	}],

	attacks: [{
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



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

