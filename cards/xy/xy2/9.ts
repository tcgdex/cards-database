import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-9",
	localId: 9,

	// Card informations
	name: {
		en: "Roserade",
		fr: "Roserade",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 407,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/9/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/9/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/9/high",
		},
	},

	evolveFrom: {
		en: "Roselia",
		fr: "Rosélia",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Whiplash",
			fr: "Fouet Furieux",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
		},
		text: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
