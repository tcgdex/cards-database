import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-84",
	localId: 84,

	// Card informations
	name: {
		en: "Regigigas",
		fr: "Regigigas",
	},

	hp: 180,

	type: [
		Type.COLORLESS,
	],

	dexId: 486,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/84/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/84/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 710,
		type: AbilityType.TALENT,
		name: {
			en: "Seal of Antiquity",
			fr: "Sceau d’Antiquité",
		},
		text: {
			en: "This Pokémon can't attack unless Regirock, Regice, and Registeel are on your Bench.",
			fr: "Ce Pokémon ne peut pas attaquer, à moins que Regirock, Regice et Registeel ne soient sur votre Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giant Stomp",
			fr: "Piétinement Gigantesque",
		},
		text: {
			en: "Discard any Stadium card in play.",
			fr: "Défaussez toute carte Stade en jeu.",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
