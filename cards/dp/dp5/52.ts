import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-52",
	localId: 52,

	// Card informations
	name: {
		en: "Bronzor",
		fr: "Archéomire",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 436,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/52/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/52/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/52/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 94,
		name: "Daisuke Ito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hypnosis",
			fr: "Hypnose",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Confuse Ray",
			fr: "Onde folie",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIRE,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
