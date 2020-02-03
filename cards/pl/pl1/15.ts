import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-15",
	localId: 15,

	// Card informations
	name: {
		en: "Shaymin",
		fr: "Shaymin",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 492,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/15/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/15/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/15/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		name: {
			en: "Growth",
			fr: "Croissance",
		},
		text: {
			en: "Attach a Grass Energy card from your hand to Shaymin.",
			fr: "Attachez à Shaymin une carte Énergie Grass de votre main",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Air Slash",
			fr: "Lame d'Air",
		},
		text: {
			en: "Flip a coin. If tails, discard an Energy attached to Shaymin.",
			fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie attachée à Shaymin.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

