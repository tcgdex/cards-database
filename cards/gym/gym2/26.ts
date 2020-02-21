import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-26",
	localId: 26,

	// Card informations
	name: {
		en: "Koga's Muk",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 89,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/26/high",
		},
	},

	evolveFrom: {
		en: "Grimer",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 981,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Drain",
		},
		text: {
			en: "If an opponent's attack does damage to Koga's Muk (even if Koga's Muk is Knocked Out), flip a coin. If heads and it has any, choose 1 Energy card attached to the attacking Pokémon and discard it. This power can't be used if Koga's Muk is already Asleep, Confused, or Paralyzed when your opponent attacks.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Sludge Whirlpool",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
