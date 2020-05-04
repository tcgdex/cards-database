import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-5",
	localId: 5,

	// Card informations
	name: {
		en: "Vespiquen",
		fr: "Apireine",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 416,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/5/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/5/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/5/high",
		},
	},

	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Gather Order",
			fr: "Ralliement",
		},
		text: {
			en: "Search your deck for as many Combee as you like and put them onto your Bench. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck autant d'Apitrini que vous voulez et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Damage Beat",
			fr: "Rouste Ravageuse",
		},
		text: {
			en: "Does 20 damage times the number of damage counters on the Defending Pokémon.",
			fr: "Inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts placés sur le Pokémon Défenseur.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
