import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-59",
	localId: 59,

	// Card informations
	name: {
		en: "Gabite",
		fr: "Carmache",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 444,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/59/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/59/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/59/high",
		},
	},

	evolveFrom: {
		en: "Gible",
		fr: "Griknot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		name: {
			en: "Healing Scale",
			fr: "Écaille guérisseuse",
		},
		text: {
			en: "Remove 1 damage counter from each of your Pokémon.",
			fr: "Retirez à chacun de vos Pokémon 1 marqueur de dégât.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sand Tomb",
			fr: "Tombe de sable",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
