import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-94",
	localId: 94,

	// Card informations
	name: {
		en: "Aerodactyl ex",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 142,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/94/high",
		},
	},

	evolveFrom: {
		en: "Mysterious Fossil",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Hikaru Koike",

	abilities: [{
		id: 303,
		type: AbilityType.POKEBODY,
		name: {
			en: "Primal Lock",
		},
		text: {
			en: "As long as Aerodactyl ex is in play, your opponent can't play Pokémon Tool cards. Remove any Pokémon Tool cards attached to your opponent's Pokémon and put them into his or her discard pile.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Supersonic",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
