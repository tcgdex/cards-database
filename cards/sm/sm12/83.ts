import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-83",
	localId: 83,

	// Card informations
	name: {
		en: "Duskull",
		fr: "Skelénox",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 355,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/83/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/83/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 98,
		name: "ryoma uratsuka"
	},

	abilities: [{
		id: 1374,
		type: AbilityType.TALENT,
		name: {
			en: "Spiritborne Evolution",
			fr: "Évolution Spirituelle",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard 3 cards from your hand. If you do, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser 3 cartes de votre main. Dans ce cas, cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Ominous Eyes",
			fr: "Regard Menaçant",
		},
		text: {
			en: "Put 2 damage counters on 1 of your opponent's Pokémon.",
			fr: "Placez 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
