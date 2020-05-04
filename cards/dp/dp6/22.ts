import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-22",
	localId: 22,

	// Card informations
	name: {
		en: "Crawdaunt",
		fr: "Colhomard",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 342,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/22/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/22/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/22/high",
		},
	},

	evolveFrom: {
		en: "Corphish",
		fr: "Krebscorps",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Gripthrow",
			fr: "Lance-grippe",
		},
		text: {
			en: "Flip a coin. If heads, your opponent returns the Defending Pokémon and all cards attached to it to his or her hand.",
			fr: "Lancez une pièce. Si c'est face, votre adversaire reprend dans sa main le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Prop-up Pinchers",
			fr: "Pinces calantes",
		},
		text: {
			en: "If Crawdaunt has a Technical Machine card attached to it, this attack does 50 damage plus 30 more damage.",
			fr: "Si Colhomard possède une carte Machine Technique, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
