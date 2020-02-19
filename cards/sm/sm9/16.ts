import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-16",
	localId: 16,

	// Card informations
	name: {
		en: "Ninetales",
		fr: "Feunard",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 38,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/16/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/16/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/16/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/16/high.png",
		},
	},

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 70,
		name: "You Iribi"
	},

	abilities: [{
		id: 1266,
		type: AbilityType.TALENT,
		name: {
			en: "Nine Temptations",
			fr: "Neuf Tentations",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard 2 Fire Energy cards from your hand. If you do, switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser 2 cartes Énergie Fire de votre main. Dans ce cas, échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flame Tail",
			fr: "Queue de Flammes",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

