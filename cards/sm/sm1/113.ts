import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-113",
	localId: 113,

	// Card informations
	name: {
		en: "Oranguru",
		fr: "Gouroutan",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 765,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/113/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/113/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/113/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/113/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 1111,
		type: AbilityType.TALENT,
		name: {
			en: "Instruct",
			fr: "Sommation",
		},
		text: {
			en: "Once during your turn (before your attack), you may draw cards until you have 3 cards in your hand.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu’à ce que vous ayez 3 cartes en main.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic",
			fr: "Psyko",
		},
		text: {
			en: "This attack does 20 more damage times the amount of Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
