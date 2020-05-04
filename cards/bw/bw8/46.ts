import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-46",
	localId: 46,

	// Card informations
	name: {
		en: "Magnezone",
		fr: "Magnézone",
	},

	hp: 140,

	type: [
		Type.LIGHTNING,
	],

	dexId: 462,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/46/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/46/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/46/high",
		},
	},

	evolveFrom: {
		en: "Magneton",
		fr: "Magnéton",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1045,
		type: AbilityType.TALENT,
		name: {
			en: "Dual Brains",
			fr: "Double Cerveau",
		},
		text: {
			en: "During your turn, you may play 2 Supporter cards.",
			fr: "Pendant votre tour, vous pouvez jouer 2 cartes Supporter.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Gyro Ball",
			fr: "Gyroballe",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. Then, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc. Ensuite, votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
