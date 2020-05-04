import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-8",
	localId: 8,

	// Card informations
	name: {
		en: "Dark Porygon2",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 233,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/8/high",
		},
	},

	evolveFrom: {
		en: "Porygon",
	},

	tags: [
		Tag.STAGE1,
	],



	abilities: [{
		id: 600,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Spatial Distortion",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, choose a Stadium card from your discard pile and put it into play. (If there's already a Stadium card in play, discard it.) This power can't be used if Dark Porygon2 is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Curve Attack",
		},
		text: {
			en: "Flip a coin. If heads, prevent all damage done by attacks to Dark Porygon2 during your opponent's next turn. (Any other effects of attacks still happen.)",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
