import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-22",
	localId: 22,

	// Card informations
	name: {
		en: "Blissey",
		fr: "Leuphorie",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 242,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/22/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/22/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/22/high",
		},
	},

	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",

	abilities: [{
		id: 1120,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Nurse Call",
			fr: "Appel à l'infirmière",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a card from your hand. If you do, remove 2 damage counters from 1 of your Pokémon. You can't use more than 1 Nurse Call Poké-Power each turn. This power can't be used if Blissey is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Retirez alors à 1 de vos Pokémon 2 marqueurs de dégât. Vous ne pouvez pas utiliser plus d'1 Poké-Power Appel à l'infirmière par tour. Ce pouvoir ne peut pas être utilisé si Leuphorie est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Return",
			fr: "Retour",
		},
		text: {
			en: "Draw cards until you have 6 cards in your hand.",
			fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double-edge",
			fr: "Damoclès",
		},
		text: {
			en: "Blissey does 60 damage to itself.",
			fr: "Leuphorie s'inflige 60 dégâts.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
