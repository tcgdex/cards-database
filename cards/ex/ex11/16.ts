import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-16",
	localId: 16,

	// Card informations
	name: {
		en: "Tyranitar δ",
	},

	hp: 120,

	type: [
		Type.FIRE,
		Type.METAL,
	],

	dexId: 248,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/16/high",
		},
	},

	evolveFrom: {
		en: "Pupitar",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 951,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Crush Draw",
		},
		text: {
			en: "Once during your turn (before your attack), you may reveal the top card of your deck. If that card is a basic Energy card, attach it to 1 of your Pokémon. If not, put the card back on top of your deck. This power can't be used if Tyranitar is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Delta Crush",
		},
		text: {
			en: "You may discard an Energy card attached to Tyranitar. If you do, this attack does 50 damage plus 20 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
