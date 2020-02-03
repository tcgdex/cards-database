import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-40",
	localId: 40,

	// Card informations
	name: {
		en: "Weavile",
		fr: "Dimoret",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 461,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/40/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/40/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/40/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/40/high.png",
		},
	},

	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 332,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Dark Engage",
			fr: "Engagement obscur",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this power. Each of your Active Pokémon's type is Darkness until the end of your turn. If that Pokémon is no longer your Active Pokémon, this effect ends.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Le type de chacun de vos Pokémon Actifs est Darkness jusqu'à la fin de votre tour. Si ce Pokémon n'est plus votre Pokémon Actif, cet effet se termine.",
		}
	}],

	attacks: [{
		name: {
			en: "Shadow Charge",
			fr: "Recharge osbcure",
		},
		text: {
			en: "Search your deck for up to 2 Darkness Energy cards and attach them to any of your Pokémon in any way you like. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck jusqu'à 2 cartes Énergie Darkness et attachez-les à vos Pokémon de la façon que vous voulez. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Chip Off",
			fr: "Grignoter",
		},
		text: {
			en: "If your opponent has 6 or more cards in his or her hand, discard a number of cards without looking until your opponent has 5 cards left in his or her hand.",
			fr: "Si votre adversaire possède au moins 6 cartes en main, défaussez des cartes sans regarder jusqu'à ce qu'il ne lui reste que 5 cartes en main.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "20"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card

