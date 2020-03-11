import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-3",
	localId: 3,

	// Card informations
	name: {
		en: "Celebi",
		fr: "Celebi",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 251,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/3/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/3/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/3/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Future Sight",
			fr: "Prescience",
		},
		text: {
			en: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
			fr: "Regardez les 5 cartes du dessus d'un deck (le vôtre ou celui de votre adversaire) et replacez-les au-dessus du même deck dans n'importe quel ordre.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Bind",
			fr: "Lassofeuille",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
