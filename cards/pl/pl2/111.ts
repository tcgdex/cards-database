import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-111",
	localId: 111,

	// Card informations
	name: {
		en: "Snorlax",
		fr: "Ronflex Niv. X",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 143,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/111/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/111/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/111/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 496,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Big Appetite",
			fr: "Gros appétit",
		},
		text: {
			en: "Once during your turn (before your attack), if Snorlax is your Active Pokémon, you may draw cards until you have 6 cards in your hand. If you do, Snorlax is now Asleep. This power can't be used if Snorlax is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Ronflex est votre Pokémon Actif, vous pouvez piocher des cartes jusqu'à ce que vous ayez 6 cartes en main. Ronflex est alors maintenant Endormi. Ce pouvoir ne peut pas être utilisé si Ronflex est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Exercise",
			fr: "Exercise",
		},
		text: {
			en: "You may discard as many Energy cards as you like from your hand. If you do, remove that many damage counters from Snorlax.",
			fr: "Vous pouvez défausser de votre main autant de cartes Énergie que vous le voulez. Retirez alors à Ronflex autant de marqueurs de dégât.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
