import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-57",
	localId: 57,

	// Card informations
	name: {
		en: "Reuniclus",
		fr: "Symbios",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 579,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/57/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/57/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/57/high",
		},
	},

	evolveFrom: {
		en: "Duosion",
		fr: "Méios",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 262,
		type: AbilityType.TALENT,
		name: {
			en: "Damage Swap",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another of your Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Psywave",
			fr: "Vague Psy",
		},
		text: {
			en: "Does 10 more damage for each Energy attached to the Defending Pokémon.",
			fr: "Inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
