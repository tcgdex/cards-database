import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW98",
	localId: "BW98",

	// Card informations
	name: {
		en: "Mew",
		fr: "Mew",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 151,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW98/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW98/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW98/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},

	abilities: [{
		id: 1139,
		type: AbilityType.TALENT,
		name: {
			en: "Psyscan",
			fr: "Psychoscan",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may have your opponent reveal his or her hand.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez demander à votre adversaire de montrer sa main.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psychic Exchange",
			fr: "Échange Psychique",
		},
		text: {
			en: "Shuffle your hand into your deck. Then, draw 6 cards.",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
