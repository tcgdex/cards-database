import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-92",
	localId: 92,

	// Card informations
	name: {
		en: "Giratina-EX",
		fr: "Giratina-EX",
	},

	hp: 180,

	type: [
		Type.DRAGON,
	],

	dexId: 487,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/92/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/92/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/92/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/92/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Shred",
			fr: "Déchiquetage",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on the Defending Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Défenseur.",
		},
		damage: 90
	},{
		cost: [
			Type.GRASS,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Pulse",
			fr: "Dracochoc",
		},
		text: {
			en: "Discard the top 3 cards of your deck.",
			fr: "Défaussez les 3 cartes du dessus de votre deck.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card

