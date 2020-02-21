import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-73",
	localId: 73,

	// Card informations
	name: {
		en: "Klefki",
		fr: "Trousselin",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 707,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/73/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/73/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/73/high",
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
		id: 743,
		type: AbilityType.TALENT,
		name: {
			en: "Secret Key",
			fr: "Clé Secrète",
		},
		text: {
			en: "Each of your Fairy Pokémon's Resistance is now -40.",
			fr: "La Résistance de chacun de vos Pokémon Fairy est maintenant -40.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Fairy Lock",
			fr: "Verrou Enchanté",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
