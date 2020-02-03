import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-35",
	localId: 35,

	// Card informations
	name: {
		en: "Poliwrath",
		fr: "Tartard",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 62,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/35/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/35/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/35/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/35/high.png",
		},
	},

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Quaputzi",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Focus Punch",
			fr: "Mitra-poing",
		},
		text: {
			en: "If Poliwrath was damaged by an attack during your opponent's last turn, this attack does nothing.",
			fr: "Si une attaque a infligé des dégâts à Tartard lors du dernier tour de votre adversaire, cette attaque est sans effet.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Submission",
			fr: "Sacrifice",
		},
		text: {
			en: "Poliwrath does 20 damage to itself.",
			fr: "Tartard s'inflige 20 dégâts.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

