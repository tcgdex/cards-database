import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-164",
	localId: 164,

	// Card informations
	name: {
		en: "Ultra Necrozma",
		fr: "Ultra-Necrozma",
	},

	hp: 110,

	type: [
		Type.DRAGON,
	],

	dexId: 800,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/164/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/164/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/164/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/164/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 80,
		name: "Hasuno"
	},

	abilities: [{
		id: 1383,
		type: AbilityType.TALENT,
		name: {
			en: "Ultra Burst",
			fr: "Ultra-Explosion",
		},
		text: {
			en: "This Pokémon can't attack unless your opponent has 2 or fewer Prize cards remaining.",
			fr: "Ce Pokémon ne peut pas attaquer, à moins qu’il ne reste 2 cartes Récompense ou moins à votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.METAL
		],
		name: {
			en: "Luster of Downfall",
			fr: "Éclat de Déchéance",
		},
		text: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 170
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
