import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-25",
	localId: 25,

	// Card informations
	name: {
		en: "Weavile",
		fr: "Dimoret",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 461,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/25/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/25/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/25/high",
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
		id: 43,
		name: "Aya Kusube"
	},

	abilities: [{
		id: 29,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Claw Snag",
			fr: "Griffentaille",
		},
		text: {
			en: "Once during your turn, when you play Weavile from your hand to evolve 1 of your Pokémon, you may look at your opponent's hand. Choose a card from your opponent's hand and discard it.",
			fr: "Une seule fois pendant votre tour, lorsque vous jouez Dimoret de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez demander à voir la main de votre adversaire. Choisissez une carte dans la main de votre adversaire et défaussez-la.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Feint Attack",
			fr: "Feinte",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
			fr: "Choisissez l'un des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers et les Poké-Bodies ou tout autre effet en action sur ce Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
