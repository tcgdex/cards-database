import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-104",
	localId: 104,

	// Card informations
	name: {
		en: "Blastoise ex",
	},

	hp: 150,

	type: [
		Type.WATER,
	],

	dexId: 9,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/104/high",
		},
	},

	evolveFrom: {
		en: "Wartortle",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 74,
		name: "Hikaru Koike"
	},

	abilities: [{
		id: 167,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Rain",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may attach a Water Energy card from your hand to 1 of your Pokémon. Put 1 damage counter on that Pokémon. This power can't be used if Blastoise ex is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Whirlpool",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, your opponent discards an Energy card attached to the Defending Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
