import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-34",
	localId: 34,

	// Card informations
	name: {
		en: "Mesprit",
		fr: "Créfollet",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 481,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/34/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/34/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/34/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/34/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 1049,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Psychic Bind",
			fr: "Attache psy",
		},
		text: {
			en: "Once during your turn, when you put Mesprit from your hand onto your Bench, you may use this power. Your opponent can't use any Poké-Powers on his or her Pokémon during your opponent's next turn.",
			fr: "Une seule fois lors de votre tour, lorsque vous placez Créfollet de votre main sur votre Banc, vous pouvez utiliser ce pouvoir. Votre adversaire ne peut pas utiliser de Poké-Powers de son Pokémon lors du prochain tour de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Extrasensory",
			fr: "Extrasenseur",
		},
		text: {
			en: "If you have the same number of cards in your hand as your opponent, this attack does 20 damage plus 50 more damage.",
			fr: "Si vous avez autant de cartes en main que votre adversaire, cette attaque inflige 20 dégâts plus 50 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

