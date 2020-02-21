import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-3",
	localId: 3,

	// Card informations
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
	},

	hp: 160,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/3/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/3/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/3/high",
		},
	},

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 161,
		name: "Ryota Murayama"
	},

	abilities: [{
		id: 1191,
		type: AbilityType.TALENT,
		name: {
			en: "Resolute Flame",
			fr: "Flamme Résolue",
		},
		text: {
			en: "This Pokémon's attacks do 30 more damage to your opponent's Active Pokémon for each of their Pokémon-GX and Pokémon-EX in play.",
			fr: "Les attaques de ce Pokémon infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire pour chacun de ses Pokémon-GX et Pokémon-EX en jeu.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fiery Blast",
			fr: "Explosion Ardente",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
