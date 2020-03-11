import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP35",
	localId: "DP35",

	// Card informations
	name: {
		en: "Porygon-Z",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 474,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP35/high",
		},
	},

	evolveFrom: {
		en: "Porygon2",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 844,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Install",
		},
		text: {
			en: "As often as you like during your turn (before your attack), move a Technical Machine card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Porygon-Z is affected by a Special Condition.",
		}
	}],

	attacks: [{
		name: {
			en: "Learning",
		},
		text: {
			en: "Search your deck for a Pokémon LV.X that levels up from 1 of your Pokémon and put it onto that Pokémon. (This counts as leveling up that Pokémon). Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Overload",
		},
		text: {
			en: "Does 40 damage plus 20 more damage for each Technical Machine card attached to Porygon-Z.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
