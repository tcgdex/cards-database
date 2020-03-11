import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-70",
	localId: 70,

	// Card informations
	name: {
		en: "Weavile",
		fr: "Dimoret",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 461,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/70/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/70/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/70/high",
		},
	},

	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Dark Penalty",
			fr: "Punition Obscure",
		},
		text: {
			en: "If the Defending Pokémon has no Pokémon Tool card attached to it, this attack does nothing.",
			fr: "S'il n'y a pas de carte Outil Pokémon attachée au Pokémon Défenseur, cette attaque ne fait rien.",
		},
		damage: 90
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fury Swipes",
			fr: "Combo-Griffe",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
