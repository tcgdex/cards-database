import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-38",
	localId: 38,

	// Card informations
	name: {
		en: "Alakazam 4",
		fr: "Alakazam  Niv. 56",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 65,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/38/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/38/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/38/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Recover",
			fr: "Soin",
		},
		text: {
			en: "Discard a Psychic Energy attached to Alakazam and remove 4 damage counters from Alakazam .",
			fr: "Défaussez une carte Énergie Psychic attachée à Alakazam  et retirez-lui 4 marqueurs de dégât.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mysterious Beam",
			fr: "Rayon mystérieux",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
