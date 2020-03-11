import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop7-2",
	localId: 2,

	// Card informations
	name: {
		en: "Gallade",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 475,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop7/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop7/2/high",
		},
	},

	evolveFrom: {
		en: "Kirlia",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Daisuke Ito",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Sonic Blade",
		},
		text: {
			en: "Put damage counters on the Defending Pokémon until it is 50 HP away from being Knocked Out. If you do, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Cut",
		},
		text: {
			en: "You may choose as many of your face-down Prize cards as you like and put them face up. If you do, this attack does 60 damage plus 20 more damage for each Prize card you chose. (These cards remain face up for the rest of the game.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+30"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 7",
		code: "pop7"
	}
}

export default card
