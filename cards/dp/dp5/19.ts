import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-19",
	localId: 19,

	// Card informations
	name: {
		en: "Flareon",
		fr: "Pyroli",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 136,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/19/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/19/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/19/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fire Fang",
			fr: "Crocs Feu",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Kindle",
			fr: "Enflammer",
		},
		text: {
			en: "Discard an Energy card attached to Flareon and then discard an Energy card attached to the Defending Pokémon.",
			fr: "Défaussez une carte Énergie attachée à Pyroli et défaussez une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
