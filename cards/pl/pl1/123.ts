import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-123",
	localId: 123,

	// Card informations
	name: {
		en: "Drapion",
		fr: "Drascore",
	},

	hp: 130,

	type: [
		Type.DARKNESS,
	],

	dexId: 452,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/123/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/123/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/123/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 339,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Tri-Poison",
			fr: "Tri-poison",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, choose 1 of the Defending Pokémon. That Pokémon is now Poisoned. Put 3 damage counters instead of 1 on that Pokémon between turns. This power can't be used if Drapion is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, choisissez 1 des Pokémon Défenseurs. Il est maintenant Empoisonné. Placez 3 marqueurs de dégât au lieu d'1 sur ce Pokémon entre deux tours. Ce pouvoir ne peut pas être utilisé si Drascore est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sniping Tail",
			fr: "Queue-sniper",
		},
		text: {
			en: "Does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Inflige 40 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
