import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-7",
	localId: 7,

	// Card informations
	name: {
		en: "Leafeon",
		fr: "Phyllali",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 470,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/7/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/7/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/7/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Soothing Scent",
			fr: "Senteur Apaisante",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magical Leaf",
			fr: "Feuille Magik",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage and heal 30 damage from this Pokémon.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires et vous soignez 30 dégâts à ce Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
