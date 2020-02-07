import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-15",
	localId: 15,

	// Card informations
	name: {
		en: "Rillaboom",
		fr: "Gorythmic",
	},

	hp: 190,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/15/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/15/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/15/high.png",
		},
	},

	evolveFrom: {
		en: "Thwackey",
		fr: "Badabouin",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 14,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Drum Roll",
			fr: "Roulement de Tambour",
		},
		text: {
			en: "This attack also does 10 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 90
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Drum Beating",
			fr: "Tambour Battant",
		},
		text: {
			en: "During your next turn, this Pokémon can't use Drum Beating.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Tambour Battant.",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card

