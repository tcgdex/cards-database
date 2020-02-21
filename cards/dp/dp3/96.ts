import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-96",
	localId: 96,

	// Card informations
	name: {
		en: "Natu",
		fr: "Natu",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 177,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/96/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/96/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bothering Wave",
			fr: "Vague inquiétante",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, discard an Energy card attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Future Sight",
			fr: "Prescience",
		},
		text: {
			en: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
			fr: "Regardez les 5 cartes du dessus du deck de chaque joueur et replacez-les au dessus du deck de chaque joueur dans n'importe quel ordre.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
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
