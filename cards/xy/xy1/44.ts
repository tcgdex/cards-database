import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-44",
	localId: 44,

	// Card informations
	name: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 100,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/44/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/44/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 1431,
		type: AbilityType.TALENT,
		name: {
			en: "Destiny Burst",
			fr: "Explo-Destin",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, flip a coin. If heads, put 5 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu'il est mis K.O. par les dégâts d'une attaque de votre adversaire, lancez une pièce. Si c'est face, placez 5 marqueurs de dégâts sur le Pokémon Attaquant.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
