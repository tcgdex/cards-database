import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-57",
	localId: 57,

	// Card informations
	name: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 274,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/57/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/57/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/57/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/57/high.png",
		},
	},

	evolveFrom: {
		en: "Seedot",
		fr: "Grainipiot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Dirty Trick",
			fr: "Coup en douce",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy card attached to 1 of your opponent's Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée à 1 des Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Razor Wind",
			fr: "Coupe-vent",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
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

