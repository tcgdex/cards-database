import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-23",
	localId: 23,

	// Card informations
	name: {
		en: "Milotic",
		fr: "Milobellus",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 350,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/23/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/23/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/23/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/23/high.png",
		},
	},

	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 674,
		type: AbilityType.TALENT,
		name: {
			en: "Energy Grace",
			fr: "Prodige d'Énergie",
		},
		text: {
			en: "Once during your turn (before your attack), you may Knock Out this Pokémon. If you do, attach 3 basic Energy cards from your discard pile to 1 of your Pokémon (excluding Pokémon-EX).",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez mettre ce Pokémon K.O. Dans ce cas, attachez 3 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon (excepté les Pokémon-EX).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Waterfall",
			fr: "Cascade",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card

