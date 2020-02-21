import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-17",
	localId: 17,

	// Card informations
	name: {
		en: "Infernape",
		fr: "Simiabraz",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 392,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/17/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/17/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/17/high",
		},
	},

	evolveFrom: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Torment",
			fr: "Tourmente",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
			fr: "Choisissez 1 des attaques du Pokémon Défenseur. Le Pokémon ciblé ne peut pas utiliser l'attaque choisie pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Malevolent Fire",
			fr: "Feu Malveillant",
		},
		text: {
			en: "Discard all Energy attached to this Pokémon.",
			fr: "Défaussez toutes les Énergies attachées à ce Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
