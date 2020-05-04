import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-19",
	localId: 19,

	// Card informations
	name: {
		en: "Azelf",
		fr: "Créfadet",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 482,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/19/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/19/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/19/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 381,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Time Walk",
			fr: "Marche temporelle",
		},
		text: {
			en: "Once during your turn, when you put Azelf from your hand onto your Bench, you may look at all of your face-down Prize cards. If you do, you may choose 1 Pokémon you find there, show it to your opponent, and put it into your hand. Then, choose 1 card in your hand and put it as a Prize card face down.",
			fr: "Une seule fois lors de votre tour, lorsque vous placez Créfadet de votre main sur votre Banc, vous pouvez regarder toutes vos cartes Récompense se trouvant face cachée. Vous pouvez alors y choisir 1 Pokémon. Montrez-le à votre adversaire et placez-le dans votre main. Ensuite, choisissez 1 carte de votre main et placez-la comme carte Récompense face cachée.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Lock Up",
			fr: "Enfermer",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
