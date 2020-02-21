import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-35",
	localId: 35,

	// Card informations
	name: {
		en: "Golduck",
		fr: "Akwakwak",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 55,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/35/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/35/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/35/high",
		},
	},

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Amnesia",
			fr: "Amnésie",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
			fr: "Choisissez 1 des attaques du Pokémon Défenseur. Le Pokémon ciblé ne peut pas utiliser l'attaque choisie pendant le prochain tour de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Aquafall",
			fr: "Aquasplash",
		},
		text: {
			en: "Discard all Energy attached to this Pokémon.",
			fr: "Défaussez toutes les Énergies attachées à ce Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
