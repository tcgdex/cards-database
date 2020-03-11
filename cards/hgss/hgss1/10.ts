import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-10",
	localId: 10,

	// Card informations
	name: {
		en: "Raichu",
		fr: "Raichu",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/10/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/10/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/10/high",
		},
	},

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Iron Tail",
			fr: "Queue de fer",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
			fr: "Lancez une pièce jusqu’à ce qu’elle tombe sur pile. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Thunderbolt",
			fr: "Tonnerre",
		},
		text: {
			en: "Discard all Energy attached to Raichu.",
			fr: "Défaussez-vous de toutes les cartes Énergie attachées à Raichu.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
