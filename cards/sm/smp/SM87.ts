import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM87",
	localId: "SM87",

	// Card informations
	name: {
		en: "Latias",
		fr: "Latias",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 380,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM87/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM87/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM87/high",
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

	abilities: [{
		id: 601,
		type: AbilityType.TALENT,
		name: {
			en: "Flight Support",
			fr: "Soutien Aérien",
		},
		text: {
			en: "Your Latios in play have no Retreat Cost.",
			fr: "Vos Latios en jeu n’ont pas de Coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Misty Gale",
			fr: "Bourrasque Brumeuse",
		},
		text: {
			en: "Heal 30 damage from each of your Benched Pokémon.",
			fr: "Soignez 30 dégâts à chacun de vos Pokémon de Banc.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
