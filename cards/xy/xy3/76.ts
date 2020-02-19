import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-76",
	localId: 76,

	// Card informations
	name: {
		en: "Flygon",
		fr: "Libégon",
	},

	hp: 130,

	type: [
		Type.DRAGON,
	],

	dexId: 330,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/76/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/76/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/76/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/76/high.png",
		},
	},

	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rainbow Shower",
			fr: "Averse Arc-En-Ciel",
		},
		text: {
			en: "Attach as many basic Energy cards as you like from your hand to your Pokémon in any way you like.",
			fr: "Attachez autant d'Énergies de base que vous voulez de votre main à vos Pokémon, de la manière que vous voulez.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Sand Sweep",
			fr: "Balayette Sablonneuse",
		},
		text: {
			en: "Heal 30 damage from each of your Pokémon that has any Energy attached to it.",
			fr: "Soignez 30 dégâts à chacun de vos Pokémon auquel de l'Énergie est attachée.",
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
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card

