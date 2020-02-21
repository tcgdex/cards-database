import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-63",
	localId: 63,

	// Card informations
	name: {
		en: "Hawlucha",
		fr: "Brutalibré",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 701,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/63/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/63/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 1416,
		type: AbilityType.TALENT,
		name: {
			en: "Shining Spirit",
			fr: "Esprit Rayonnant",
		},
		text: {
			en: "Damage from this Pokémon's attacks isn't affected by Weakness or Resistance.",
			fr: "Les dégâts des attaques de ce Pokémon ne sont pas affectés par la Faiblesse ou la Résistance.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Flying Press",
			fr: "Flying Press",
		},
		text: {
			en: "If your opponent's Active Pokémon isn't a Pokémon-EX, this attack does nothing.",
			fr: "Si le Pokémon Actif de votre adversaire n'est pas un Pokémon-EX, cette attaque ne fait rien.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
