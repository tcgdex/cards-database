import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-38",
	localId: 38,

	// Card informations
	name: {
		en: "Erika's Bellsprout",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 69,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/38/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 985,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Soak Up",
		},
		text: {
			en: "Once during your turn (before your attack), you may take up to 2 Grass Energy cards attached to other Pokémon and attach them to Erika's Bellsprout. This power can't be used if Erika's Bellsprout is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Stretch Vine",
		},
		text: {
			en: "Choose 1 of your opponent's Benched Pokémon, and this attack does 10 damage to it. (Don't apply Weakness and resistance for Benched Pokémon.)",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
