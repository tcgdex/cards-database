import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-1",
	localId: 1,

	// Card informations
	name: {
		en: "Dialga",
		fr: "Dialga",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 483,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/1/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/1/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Nakaoka",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Time Bellow",
			fr: "Appel temporel",
		},
		text: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
		},
		damage: 10
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Flash Cannon",
			fr: "Luminocanon",
		},
		text: {
			en: "You may return all Energy cards attached to Dialga to your hand. If you do, remove the highest Stage Evolution card from the Defending Pokémon and shuffle that card into your opponent's deck.",
			fr: "Vous pouvez reprendre dans votre main toutes les cartes Énergie attachées à Dialga. Retirez alors au Pokémon Défenseur la carte Évolution au niveau le plus élevé et mélangez-la au deck de votre adversaire.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
