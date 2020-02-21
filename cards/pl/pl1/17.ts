import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-17",
	localId: 17,

	// Card informations
	name: {
		en: "Weavile G",
		fr: "Dimoret ",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 461,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/17/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/17/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: {
		id: 90,
		name: "Makoto Imai"
	},



	attacks: [{
		name: {
			en: "Call for Family",
			fr: "Appel à la famille",
		},
		text: {
			en: "Search your deck for up to 2 basic Pokémon SP and put them onto your Bench. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de base SP et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Team Attack",
			fr: "Attaque de groupe",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each Pokémon SP you have in play.",
			fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon SP que vous avez en jeu.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
