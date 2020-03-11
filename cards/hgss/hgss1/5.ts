import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-5",
	localId: 5,

	// Card informations
	name: {
		en: "Hitmontop",
		fr: "Kapoera",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 237,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/5/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/5/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Triple Kick",
			fr: "Triple pied",
		},
		text: {
			en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Close Combat",
			fr: "Combat rapproché",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Hitmontop by attacks is increased by 20 (after applying Weakness and Resistance).",
			fr: "Tous les dégâts infligés à Kapoera par des attaques pendant le prochain tour de votre adversaire sont augmentés de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
