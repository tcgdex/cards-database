import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-23",
	localId: 23,

	// Card informations
	name: {
		en: "Infernape",
		fr: "Simiabraz",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 392,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/23/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/23/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/23/high",
		},
	},

	evolveFrom: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},

	abilities: [{
		id: 983,
		type: AbilityType.TALENT,
		name: {
			en: "Flaming Fighter",
			fr: "Combattant Incandescent",
		},
		text: {
			en: "Put 6 damage counters instead of 2 on your opponent's Burned Pokémon between turns.",
			fr: "Placez 6 marqueurs de dégâts au lieu de 2 sur le Pokémon Brûlé de votre adversaire entre chaque tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Burst Punch",
			fr: "Poing d’Enfer",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
