import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-100",
	localId: 100,

	// Card informations
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 54,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/100/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/100/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/100/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/100/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Delusion",
			fr: "Hallucination",
		},
		text: {
			en: "If Psyduck is Confused, draw 2 cards.",
			fr: "Si Psykokwak est Confus, piochez 2 cartes.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Migraine",
			fr: "Maud'krâne",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, Psyduck is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Si c'est pile, Psykokwak est maintenant Confus.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card

