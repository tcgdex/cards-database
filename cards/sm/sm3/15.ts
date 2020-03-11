import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-15",
	localId: 15,

	// Card informations
	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 752,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/15/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/15/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/15/high",
		},
	},

	evolveFrom: {
		en: "Dewpider",
		fr: "Araqua",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bubble Net",
			fr: "Filet de Bulles",
		},
		text: {
			en: "Energy can't be attached to the Defending Pokémon from your opponent's hand during their next turn.",
			fr: "Aucune Énergie ne peut être attachée au Pokémon Défenseur de la main de votre adversaire pendant son prochain tour.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
