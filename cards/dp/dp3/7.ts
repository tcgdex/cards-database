import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-7",
	localId: 7,

	// Card informations
	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 282,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/7/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/7/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/7/high",
		},
	},

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Atsuko Nishida",

	abilities: [{
		id: 1058,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Telepass",
			fr: "Télépathie",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your opponent's discard pile for a Supporter card and use the effect of that card as the effect of this power. (The Supporter card remains in your opponent's discard pile.)  You can't use more than 1 Telepass Poké-Power each turn. This power can't be used if Gardevoir is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans la pile de défausse de votre adversaire une carte Supporter et utiliser l'effet de cette carte comme l'effet de ce pouvoir. (La carte Supporter reste dans la pile de défausse de votre adversaire.) Vous ne pouvez pas utiliser plus d'1 Poké-Power Télépathie par tour. Ce pouvoir ne peut pas être utilisé si Gardevoir est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Lock",
			fr: "Verrou psy",
		},
		text: {
			en: "During your opponent's next turn, your opponent can't use any Poké-Powers on his or her Pokémon.",
			fr: "Lors du prochain tour de votre adversaire, celui-ci ne peut pas utiliser de Poké-Powers sur ses Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
