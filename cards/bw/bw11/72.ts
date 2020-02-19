import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-72",
	localId: 72,

	// Card informations
	name: {
		en: "Gothitelle",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 576,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/72/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/72/high.png",
		},
	},

	evolveFrom: {
		en: "Gothorita",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},

	abilities: [{
		id: 550,
		type: AbilityType.TALENT,
		name: {
			en: "Magic Room",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent can't play any Item cards from his or her hand.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Madkinesis",
		},
		text: {
			en: "Does 20 more damage for each Psychic Energy attached to this Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card

