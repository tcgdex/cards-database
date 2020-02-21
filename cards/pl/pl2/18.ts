import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-18",
	localId: 18,

	// Card informations
	name: {
		en: "Espeon 4",
		fr: "Mentali  Niv. 55",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 196,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/18/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/18/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hypnosis",
			fr: "Hypnose",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psywave",
			fr: "Vague psy",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
			fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
