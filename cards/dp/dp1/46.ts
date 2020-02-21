import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-46",
	localId: 46,

	// Card informations
	name: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 425,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/46/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/46/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Blowing Wind",
			fr: "Vent violent",
		},
		text: {
			en: "Flip a coin. If heads, put 1 of your Benched Pokémon and all cards attached to on top of your deck. Shuffle your deck afterward.",
			fr: "Lancez une pièce. Si c'est face, placez 1 de vos Pokémon de Banc et toutes les cartes qui lui sont attachées au dessus de votre deck. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Ominous Wind",
			fr: "Vent Mauvais",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused and can't retreat during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus et ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+10"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
