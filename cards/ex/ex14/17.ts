import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-17",
	localId: 17,

	// Card informations
	name: {
		en: "Dusclops",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 356,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/17/high",
		},
	},

	evolveFrom: {
		en: "Duskull",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 169,
		type: AbilityType.POKEBODY,
		name: {
			en: "Cursed Glare",
		},
		text: {
			en: "As long as Dusclops is your Active Pokémon, your opponent can't attach any Special Energy cards (except for Darkness and Metal Energy cards) from his or her hand to his or her Active Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Will-o'-the-wisp",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Shield",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to Dusclops by your opponent's Pokémon-ex during your opponent's next turn.",
		},
		damage: 50
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
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
