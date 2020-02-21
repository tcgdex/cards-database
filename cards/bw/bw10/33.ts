import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-33",
	localId: 33,

	// Card informations
	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
	},

	hp: 140,

	type: [
		Type.LIGHTNING,
	],

	dexId: 604,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/33/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/33/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/33/high",
		},
	},

	evolveFrom: {
		en: "Eelektrik",
		fr: "Lampéroie",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Crush and Burn",
			fr: "Écra-Brûle",
		},
		text: {
			en: "Discard as many Energy attached to your Pokémon as you like. This attack does 30 damage times the number of Energy cards you discarded.",
			fr: "Défaussez autant d'Énergies attachées à vos Pokémon que vous voulez. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunder Tempest",
			fr: "Tempête Foudre",
		},
		text: {
			en: "Flip 4 coins. This attack does 50 damage times the number of heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
