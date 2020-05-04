import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-182",
	localId: 182,

	// Card informations
	name: {
		en: "Oranguru",
		fr: "Gouroutan",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 765,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/182/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/182/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/182/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/182/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sage's Riddle",
			fr: "Charade du Grand Sage",
		},
		text: {
			en: "Put a Pokémon from your hand face down in front of you. Your opponent guesses the type of that Pokémon, and then you reveal it. If your opponent guessed right, they draw 4 cards. If they guessed wrong, you draw 4 cards. Return the Pokémon to your hand.",
			fr: "Placez un Pokémon de votre main devant vous, face cachée. Votre adversaire devine le type de ce Pokémon, puis vous le retournez. Si votre adversaire a bien deviné, il pioche 4 cartes. S’il a mal deviné, vous piochez 4 cartes. Remettez ce Pokémon dans votre main.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
