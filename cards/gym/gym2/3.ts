import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-3",
	localId: 3,

	// Card informations
	name: {
		en: "Brock's Ninetales",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 38,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/3/high",
		},
	},

	evolveFrom: {
		en: "Vulpix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 976,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Shapeshift",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach an Evolution card from your hand to Brock's Ninetales. (This doesn't count as evolving Brock's Ninetales.) Treat Brock's Ninetales as if it were that Pokémon instead. It can't evolve, devolve, or use the Pokémon Power of that Pokémon. During your turn, you may discard the Evolution card attached to Brock's Ninetales. This power can't be used if Brock's Ninetales is Asleep, Confused, or Paralyzed. If Brock's Ninetales becomes Asleep, Confused, or Paralyzed, discard all Evolution cards attached to it.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Will-o'-the-wisp",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
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
