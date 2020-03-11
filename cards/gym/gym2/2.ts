import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-2",
	localId: 2,

	// Card informations
	name: {
		en: "Blaine's Charizard",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/2/high",
		},
	},

	evolveFrom: {
		en: "Charmeleon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Roaring Flames",
		},
		text: {
			en: "Discard all Energy cards attached to Blaine's Charizard. If all Energy cards attached to Blaine's Charizard provide 2 Energy, discard all of them. This attack does 20 damage plus 20 more damage for each Energy discarded in this way. ERRATA: Discard all Energy cards attached to Blaine's Charizard except 1.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Flame Jet",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
