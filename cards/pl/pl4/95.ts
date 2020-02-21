import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-95",
	localId: 95,

	// Card informations
	name: {
		en: "Arceus",
		fr: "Arceus",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 493,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/95/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/95/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 180,
		type: AbilityType.POKEBODY,
		name: {
			en: "Multitype",
			fr: "Multi-Type",
		},
		text: {
			en: "Arceus LV.X's type is the same type as its previous Level.",
			fr: "Le type d'Arceus NIV.X est le même qu'au tour précédent.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Meteor Blast",
			fr: "Explosion de météores",
		},
		text: {
			en: "Flip a coin. If tails, this attack's base damage is 50 instead of 100.",
			fr: "Lancez une pièce. Si c'est pile, les dégâts de base de cette attaque sont de 50 au lieu de 100.",
		},
		damage: 100
	}],





	retreat: 1,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
