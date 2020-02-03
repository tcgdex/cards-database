import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-25",
	localId: 25,

	// Card informations
	name: {
		en: "Braixen",
		fr: "Roussil",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 654,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/25/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/25/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/25/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/25/high.png",
		},
	},

	evolveFrom: {
		en: "Fennekin",
		fr: "Feunnec",
	},

	tags: [
		Tag.STAGE1,
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
			en: "Clairvoyant Eye",
			fr: "Œil Clairvoyant",
		},
		text: {
			en: "Look at the top 3 cards of your deck and put them back on top of your deck in any order.",
			fr: "Regardez les 3 cartes du dessus de votre deck et replacez-les sur le dessus de votre deck dans l'ordre de votre choix.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Tail Slap",
			fr: "Coup de Queue Enflammé",
		},
		text: {
			en: "Discard a Fire Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie Fire attachée à ce Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card

