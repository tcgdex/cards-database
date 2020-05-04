import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-48",
	localId: 48,

	// Card informations
	name: {
		en: "Pelipper",
		fr: "Bekipan",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 279,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/48/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/48/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/48/high",
		},
	},

	evolveFrom: {
		en: "Wingull",
		fr: "Goelise",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {
			en: "Guzzle",
			fr: "Goinfre",
		},
		text: {
			en: "Choose up to 2 basic Water Energy cards from your hand and attach them to Pelipper. Remove 2 damage counters for each Energy card attached in this way.",
			fr: "Choisissez jusqu'à 2 cartes Énergie de base (W) de votre main et attachez-les à Bekipan. Retirez 2 marqueurs de dégât pour chaque carte Énergie attachée de cette façon.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jet Return",
			fr: "Retour de jet",
		},
		text: {
			en: "Does 30 damage times the number of Energy cards attached to Pelipper. Then, put all Energy cards attached to Pelipper on top of your deck. Shuffle your deck afterward.",
			fr: "Inflige 30 dégâts multipliés par le nombre de cartes Énergie attachées à Bekipan. Ensuite, placez toutes les cartes Énergie attachées à Bekipan au dessus de votre deck. Puis, mélangez votre deck.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
