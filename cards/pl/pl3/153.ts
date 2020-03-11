import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-153",
	localId: 153,

	// Card informations
	name: {
		fr: "Yanma",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/pl/pl3/153/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/pl/pl3/153/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Sonicboom",
		},
		text: {
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Relais",
		},
		text: {
			fr: "Vous pouvez échanger Yanma avec 1 de vos Pokémon de Banc. Déplacez alors autant de cartes Énergie attachées à Yanma que vous le voulez sur le nouveau Pokémon Actif.",
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Vainqueurs Suprêmes",
		code: "pl3"
	}
}

export default card
