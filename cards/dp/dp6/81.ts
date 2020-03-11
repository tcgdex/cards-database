import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-81",
	localId: 81,

	// Card informations
	name: {
		en: "Unown Y",
		fr: "Zarbi Y",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/81/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/81/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kazuaki Aihara",

	abilities: [{
		id: 192,
		type: AbilityType.POKEPOWER,
		name: {
			en: "YAWN",
			fr: "YAWN",
		},
		text: {
			en: "Once during your turn (before your attack), if Unown Y is on your Bench, you may remove 1 damage counter from 1 of your Active Unown and that Unown is now Asleep.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi Y est sur votre Banc, vous pouvez retirer à votre Zarbi Actif 1 marqueur de dégât. Ce Zarbi est maintenant Endormi.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		text: {
			en: "Search your deck for up to 2 Trainer cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck jusqu'à 2 cartes Dresseur, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
