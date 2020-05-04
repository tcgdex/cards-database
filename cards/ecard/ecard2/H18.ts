import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-H18",
	localId: "H18",

	// Card informations
	name: {
		en: "Nidoking",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 34,


	evolveFrom: {
		en: "Nidorino",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Naoyo Kimura",

	abilities: [{
		id: 217,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Earth Rage",
		},
		text: {
			en: "Once during your turn (before your attack), if Nidoking is your Active Pokémon, you may flip a coin. If heads, put a damage counter on each of your opponent's Benched Pokémon. This power can't be used if Nidoking is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giant Horn",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 50 damage plus 30 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
