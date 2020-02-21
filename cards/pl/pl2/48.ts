import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-48",
	localId: 48,

	// Card informations
	name: {
		en: "Scizor 4",
		fr: "Cizayox  Niv. 49",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 212,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/48/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/48/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/48/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Cut",
			fr: "Coupe",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crushing Blow",
			fr: "Coup écrasant",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
