import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-103",
	localId: 103,

	// Card informations
	name: {
		en: "Cresselia",
		fr: "Cresselia",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 488,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/103/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/103/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/103/high",
		},
	},

	evolveFrom: {
		fr: "Niveau Sup",
	},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 536,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Full Moon Dance",
			fr: "Danse de pleine lune",
		},
		text: {
			en: "Once during your turn (before your attack), you may move 1 damage counter from either player's Pokémon to another Pokémon (yours or your opponent's). This power can't be used if Cresselia is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégât d'1 Pokémon d'1 des joueurs vers 1 autre Pokémon (1 des vôtres ou 1 de votre adversaire). Ce pouvoir ne peut pas être utilisé si Cresselia est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Moon Skip",
			fr: "Petit bond lunaire",
		},
		text: {
			en: "If the Defending Pokémon is Knocked Out by this attack, take 1 more Prize card.",
			fr: "Si le Pokémon Défenseur est mis K.O par cette attaque, récoltez 1 carte Récompense supplémentaire.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
