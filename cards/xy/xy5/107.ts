import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-107",
	localId: 107,

	// Card informations
	name: {
		en: "Kingdra",
		fr: "Hyporoi",
	},

	hp: 130,

	type: [
		Type.DRAGON,
	],

	dexId: 230,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/107/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/107/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/107/high",
		},
	},

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Shred",
			fr: "Déchiquetage",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.LIGHTNING
		],
		name: {
			en: "Twister",
			fr: "Ouragan",
		},
		text: {
			en: "Flip 2 coins. For each heads, discard an Energy attached to your opponent's Active Pokémon. If both of them are tails, this attack does nothing.",
			fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
