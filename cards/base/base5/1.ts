import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base5-1",
	localId: 1,

	// Card informations
	name: {
		en: "Dark Alakazam",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 65,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/1/high",
		},
	},

	evolveFrom: {
		en: "Kadabra",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Teleport Blast",
		},
		text: {
			en: "You may switch Dark Alakazam with 1 of your Benched Pokémon (Do the damage before switching the Pokémon).",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Mind Shock",
		},
		text: {
			en: "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
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
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
