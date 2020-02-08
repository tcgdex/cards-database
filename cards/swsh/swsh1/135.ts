import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-135",
	localId: 135,

	// Card informations
	name: {
		en: "Corviknight",
		fr: "Corvaillus",
	},

	hp: 170,

	type: [
		Type.METAL,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/135/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/135/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/135/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/135/high.png",
		},
	},

	evolveFrom: {
		en: "Corvisquire",
		fr: "Bleuseille",
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
			Type.COLORLESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 50
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Iron Wings",
			fr: "Ailes de Fer",
		},
		text: {
			en: "You may discard 2 Energy from this Pokémon. If you do, during your opponent's next turn, this Pokémon takes 100 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Vous pouvez défausser 2 Énergies de ce Pokémon. Dans ce cas, pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
