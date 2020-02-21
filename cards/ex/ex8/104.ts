import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-104",
	localId: 104,

	// Card informations
	name: {
		en: "Sharpedo ex",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 319,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/104/high",
		},
	},

	evolveFrom: {
		en: "Carvanha",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 74,
		name: "Hikaru Koike"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Drag Off",
		},
		text: {
			en: "Before doing damage, you may switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. If you do, this attack does 20 damage to the new Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Blast",
		},
		text: {
			en: "You may discard a Darkness Energy attached to Sharpedo ex. If you do, this attack does 60 damage plus 20 more damage and discard 1 Energy card attached to the Defending Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
