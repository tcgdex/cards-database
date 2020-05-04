import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-58",
	localId: 58,

	// Card informations
	name: {
		en: "Throh",
		fr: "Judokrak",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 538,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/58/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/58/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Scarf Hold",
			fr: "Kesa-Gatame",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
