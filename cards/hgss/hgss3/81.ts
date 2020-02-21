import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-81",
	localId: 81,

	// Card informations
	name: {
		en: "Espeon",
		fr: "Mentali",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 196,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/81/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/81/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/81/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},

	abilities: [{
		id: 824,
		type: AbilityType.POKEBODY,
		name: {
			en: "Evolution Memories",
			fr: "Souvenirs d'Évolution",
		},
		text: {
			en: "Espeon can use the attacks of all Pokémon you have in play that evolve from Eevee as its own. (You still need the necessary Energy to use each attack.)",
			fr: "Mentali peut réutiliser les attaques de tous les Pokémon que vous avez joués et qui sont une évolution d'Evoli. (Vous devrez néanmoins avoir les Énergies nécessaires pour utiliser chaque attaque.)",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Solar Ray",
			fr: "Rayonnement solaire",
		},
		text: {
			en: "Remove 1 damage counter from each of your Pokémon.",
			fr: "Retirez 1 marqueur de dégât à chacun de vos Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
