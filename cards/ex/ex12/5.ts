import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-5",
	localId: 5,

	// Card informations
	name: {
		en: "Gengar",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 94,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/5/high",
		},
	},

	evolveFrom: {
		en: "Haunter",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 208,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Shadow Curse",
		},
		text: {
			en: "If Gengar would be Knocked Out by damage from an opponent's attack, you may put 3 damage counters on 1 of your opponent's Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Cursed Reaction",
		},
		text: {
			en: "Put 2 damage counters on your opponent's Pokémon in any way you like. If Gengar has any React Energy cards attached to it, put 4 damage counters instead.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Super Psy Bolt",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
