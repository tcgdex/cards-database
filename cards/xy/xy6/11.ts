import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-11",
	localId: 11,

	// Card informations
	name: {
		en: "Shedinja",
		fr: "Munja",
	},

	hp: 30,

	type: [
		Type.GRASS,
	],

	dexId: 292,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/11/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/11/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/11/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/11/high.png",
		},
	},

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Cursed Rain",
			fr: "Pluie Ensorcelée",
		},
		text: {
			en: "Put 1 damage counter on each of your opponent's Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Placez 1 marqueur de dégâts sur chacun des Pokémon de votre adversaire. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hopeless Scream",
			fr: "Cri de Désespoir",
		},
		text: {
			en: "This attack does 50 damage times the number of damage counters on this Pokémon.",
			fr: "Cette attaque inflige 50 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
		},
		damage: 50
	}],





	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card

