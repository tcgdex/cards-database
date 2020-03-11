import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-1",
	localId: 1,

	// Card informations
	name: {
		en: "Dusknoir",
		fr: "Dusknoir",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 477,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/1/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/1/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/1/high",
		},
	},

	evolveFrom: {
		en: "Dusclops",
		fr: "Teraclope",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 559,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Shadow Command",
			fr: "Pouvoir ombre",
		},
		text: {
			en: "Once during your turn (before your attack), you may draw 2 cards. If you have 7 or more cards in your hand, discard a number of cards until you have 6 cards in your hand. Then, put 2 damage counters on Dusknoir. This power can't be used if Dusknoir is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez piocher 2 cartes. Si vous avez au moins 7 cartes en main, défaussez des cartes jusqu'à ce que vous n'ayez plus que 6 cartes en main. Ensuite, placez 2 marqueurs de dégât sur Noctunoir. Ce pouvoir ne peut pas être utilisé si Noctunoir est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Damage Even",
			fr: "Dégâts équilibrés",
		},
		text: {
			en: "Count the number of damage counters on Dusknoir. Put that many damage counters on 1 of your opponent's Pokémon.",
			fr: "Comptabilisez le nombre de marqueurs de dégât sur Noctunoir. Placez autant de marqueurs de dégât sur 1 des Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Night Spin",
			fr: "Tour nocturne",
		},
		text: {
			en: "Prevent all effects of an attack, including damage, done to Dusknoir by your opponent's Pokémon that has 2 or less Energy attached to it during your opponent's next turn.",
			fr: "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Noctunoir par les Pokémon de votre adversaire possédant un maximum de 2 Énergies lors du prochain tour de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+30"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
