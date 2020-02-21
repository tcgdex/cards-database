import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-75",
	localId: 75,

	// Card informations
	name: {
		en: "Palossand",
		fr: "Trépassable",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 770,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/75/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/75/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/75/high",
		},
	},

	evolveFrom: {
		en: "Sandygast",
		fr: "Bacabouh",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 1219,
		type: AbilityType.TALENT,
		name: {
			en: "Wall of Sand",
			fr: "Muraille de Sable",
		},
		text: {
			en: "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Absorb Vitality",
			fr: "Absorb Vitalité",
		},
		text: {
			en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
