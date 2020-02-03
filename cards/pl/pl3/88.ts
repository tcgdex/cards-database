import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-88",
	localId: 88,

	// Card informations
	name: {
		en: "Yanma",
		fr: "Yanma",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 193,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/88/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/88/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/88/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/88/high.png",
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
			en: "Supersonic",
			fr: "Ultrason",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Air Slash",
			fr: "Lame d'air",
		},
		text: {
			en: "Flip a coin. If tails, discard an Energy card attached to Yanma.",
			fr: "Lancez une pièce. Si c'est pile, défaussez une carte Énergie attachée à Yanma.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card

