import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-68",
	localId: 68,

	// Card informations
	name: {
		en: "Masquerain",
		fr: "Maskadra",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 284,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/68/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/68/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/68/high",
		},
	},

	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 542,
		type: AbilityType.POKEBODY,
		name: {
			en: "Intimidating Pattern",
			fr: "Style intimidant",
		},
		text: {
			en: "As long as Masquerain is your Active Pokémon, any damage done by an opponent's attack is reduced by 20 (before applying Weakness and Resistance).",
			fr: "Tant que Maskadra est votre Pokémon Actif, tous les dégâts infligés par une attaque de votre adversaire sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Skim Attack",
			fr: "Attaque rasante",
		},
		text: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
