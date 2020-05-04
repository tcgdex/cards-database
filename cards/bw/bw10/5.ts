import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-5",
	localId: 5,

	// Card informations
	name: {
		en: "Tropius",
		fr: "Tropius",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 357,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/5/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/5/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Return",
			fr: "Retour",
		},
		text: {
			en: "Draw cards until you have 6 cards in your hand.",
			fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Press",
			fr: "Pression Énergétique",
		},
		text: {
			en: "Does 20 more damage for each Energy attached to the Defending Pokémon.",
			fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
