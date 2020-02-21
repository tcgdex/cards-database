import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-2",
	localId: 2,

	// Card informations
	name: {
		en: "Cresselia",
		fr: "Cresselia",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 488,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/2/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/2/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/2/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Moon Twinkle",
			fr: "Étincelle de lune",
		},
		text: {
			en: "If there is any Stadium card in play, remove 2 damage counters from Cresselia.",
			fr: "Si une carte Stade est en jeu, retirez à Cresselia 2 marqueurs de dégât.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Lunar Dance",
			fr: "Danse-lune",
		},
		text: {
			en: "You may discard 2 Energy attached to Cresselia. If you do, remove all damage counters from 1 of your Benched Pokémon.",
			fr: "Vous pouvez défausser 2 Énergies attachées à Cresselia. Retirez alors tous ses marqueurs de dégât à 1 des Pokémon de votre Banc.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
