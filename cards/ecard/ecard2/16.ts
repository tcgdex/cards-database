import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-16",
	localId: 16,

	// Card informations
	name: {
		en: "Hypno",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 97,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/16/high",
		},
	},

	evolveFrom: {
		en: "Drowzee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 194,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Sleep Pendulum",
		},
		text: {
			en: "Once during your turn (before your attack), if Hypno is your Active Pokémon, you may use this power. The Defending Pokémon is now Asleep. This power can't be used if Hypno is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Aura",
		},
		text: {
			en: "Unless this attack Knocks Out the Defending Pokémon, if your opponent has any Benched Pokémon you may choose 1 of them and switch it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
