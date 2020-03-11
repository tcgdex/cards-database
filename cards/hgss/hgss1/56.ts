import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-56",
	localId: 56,

	// Card informations
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 40,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/56/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/56/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/56/high",
		},
	},

	evolveFrom: {
		en: "Jiggylypuff",
		fr: "Rondoudou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Slap",
			fr: "Torgnoles",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Expand",
			fr: "Pousstoidla",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Wigglytuff by attacks is reduced by 10 (after applying Weakness and Resistance).",
			fr: "Tous les dégâts infligés à Grodoudou par des attaques pendant le prochain tour de votre adversaire sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
