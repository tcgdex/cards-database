import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-94",
	localId: 94,

	// Card informations
	name: {
		en: "Skuntank G",
		fr: "Moufflair ",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 435,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/94/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/94/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: "Makoto Imai",

	abilities: [{
		id: 980,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Poison Structure",
			fr: "Structure poison",
		},
		text: {
			en: "Once during your turn (before your attack), if you have a Stadium card in play, you may use this power. Each Active Pokémon (both yours and your opponent's) (excluding Pokémon SP) is now Poisoned. This power can't be used if Skuntank is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si vous avez une carte Stade en jeu, vous pouvez utiliser ce pouvoir. Chaque Pokémon Actif (les vôtres et ceux de votre adversaire) (Pokémon SP exclus) est maintenant Empoisonné. Ce pouvoir ne peut pas être utilisé si Moufflair  est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Smokescreen",
			fr: "Brouillard",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
