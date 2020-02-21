import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-88",
	localId: 88,

	// Card informations
	name: {
		en: "Wooper",
		fr: "Axoloto",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 194,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/88/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/88/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tail Whip",
			fr: "Mouvemend’keu",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur ne peut pas attaquer durant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Watering",
			fr: "Arrosage",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
