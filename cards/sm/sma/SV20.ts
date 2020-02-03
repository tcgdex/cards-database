import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV20",
	localId: "SV20",

	// Card informations
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 185,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV20/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV20/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV20/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV20/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},

	abilities: [{
		id: 1184,
		type: AbilityType.TALENT,
		name: {
			en: "Roadblock",
			fr: "Barrage Routier",
		},
		text: {
			en: "Your opponent can't have more than 4 Benched Pokémon. If they have 5 or more Benched Pokémon, they discard Benched Pokémon until they have 4 Pokémon on the Bench. If more than one effect changes the number of Benched Pokémon allowed, use the smaller number.",
			fr: "Votre adversaire ne peut pas avoir plus de 4 Pokémon de Banc. S’il a 5 Pokémon de Banc ou plus, il doit défausser des Pokémon de Banc jusqu’à en avoir 4 sur le Banc. Si plus d’un effet change le nombre de Pokémon de Banc autorisés, utilisez le nombre le plus petit.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card

