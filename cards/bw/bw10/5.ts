import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},



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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
