import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-70",
	localId: 70,

	// Card informations
	name: {
		en: "Beheeyem",
		fr: "Neitram",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 606,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/70/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/70/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/70/high",
		},
	},

	evolveFrom: {
		en: "Elgyem",
		fr: "Lewsor",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Lock Up",
			fr: "Cage",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Damakinesis",
			fr: "Dégâkinésie",
		},
		text: {
			en: "Move 6 damage counters from any of your Pokémon to the Defending Pokémon.",
			fr: "Déplacez 6 marqueurs de dégâts de vos Pokémon vers le Pokémon Défenseur.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
