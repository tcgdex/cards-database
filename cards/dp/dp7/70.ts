import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-70",
	localId: 70,

	// Card informations
	name: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 25,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/70/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/70/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/70/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/70/high.png",
		},
	},

	evolveFrom: {
		fr: "Pikachu",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pika Punch",
			fr: "Pika-poing",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Speed Bolt",
			fr: "Boulon vitesse",
		},
		text: {
			en: "If Pikachu evolved from Pichu during this turn, prevent all effects of an attack, including damage, done to Pikachu during your opponent's next turn.",
			fr: "Si Pikachu a évolué de Pichu lors de ce tour, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Pikachu lors du prochain tour de votre adversaire.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

