import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-13",
	localId: 13,

	// Card informations
	name: {
		en: "Gengar",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 94,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/13/high",
		},
	},

	evolveFrom: {
		en: "Haunter",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},

	abilities: [{
		id: 347,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Chaos Move",
		},
		text: {
			en: "Once during your turn (before you attack), if your opponent has 3 or fewer Prizes, you may move 1 damage counter from 1 Pokémon (yours or your opponent's) to another (even if it would Knock Out the other Pokémon). This power can't be used if Gengar is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Hide in Shadows",
		},
		text: {
			en: "Switch Gengar with one of your Benched Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
