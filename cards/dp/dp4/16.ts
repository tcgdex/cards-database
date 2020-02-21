import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-16",
	localId: 16,

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
			en: "https://assets.tcgdex.net/en/dp/dp4/16/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/16/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 94,
		name: "Daisuke Ito"
	},



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
			fr: "Vous pouvez reprendre dans votre main toutes les cartes Énergie attachées à Dialga. Retirez alors au Pokémon Défenseur la carte au niveau d'Évolution le plus élevé et mélangez-la au deck de votre adversaire.",
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
