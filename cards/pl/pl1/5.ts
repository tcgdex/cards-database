import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-5",
	localId: 5,

	// Card informations
	name: {
		en: "Dialga",
		fr: "Dialga",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 483,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/5/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/5/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/5/high",
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
		id: 1117,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Reverse Time",
			fr: "Temps inverse",
		},
		text: {
			en: "Once during your turn, when you put Dialga from your hand onto your Bench, you may search your discard pile for up to 3 in any combination of Pokémon (excluding Pokémon LV.X) and basic Energy cards. Show them to your opponent and put them on top of your deck in any order.",
			fr: "Une seule fois lors de votre tour, lorsque vous placez Dialga de votre main sur votre Banc, vous pouvez chercher dans votre pile de défausse n'importe quelle combinaison de jusqu'à 3 Pokémon (Pokémon NIV.X exclus) et cartes Énergie de base. Montrez-les à votre adversaire et placez-les au dessus de votre deck dans n'importe quel ordre.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Time-Space Traveling",
			fr: "Voyage espace-temps",
		},
		text: {
			en: "Draw cards until you have 7 cards in your hand.",
			fr: "Piochez des cartes jusqu'à ce que vous ayez 7 cartes en main.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
