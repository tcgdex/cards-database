import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-61",
	localId: 61,

	// Card informations
	name: {
		en: "M Rayquaza-EX",
		fr: "M Rayquaza-EX",
	},

	hp: 230,

	type: [
		Type.DRAGON,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/61/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/61/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/61/high",
		},
	},

	evolveFrom: {
		en: "Rayquaza-EX",
		fr: "Rayquaza-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: -1,
		type: AbilityType.ANCIENTTRAIT,
		name: {
			fr: "Jungle Δ",
		},
		text: {
			fr: "Tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Grass, Fire, Water ou Lightning de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Ascent",
			fr: "Règle des Méga-Évolutions",
		},
		text: {
			en: "Discard 2 Energy attached to this Pokémon.",
		},
		damage: 300
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			fr: "Draco Ascension",
		},
		text: {
			fr: "Défaussez 2 Énergies attachées à ce Pokémon.",
		},
		damage: 300
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
