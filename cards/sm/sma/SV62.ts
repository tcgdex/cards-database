import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV62",
	localId: "SV62",

	// Card informations
	name: {
		en: "Nihilego-GX",
		fr: "Zéroïd-GX",
	},

	hp: 180,

	type: [
		Type.PSYCHIC,
	],

	dexId: 793,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV62/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV62/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV62/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV62/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 722,
		type: AbilityType.TALENT,
		name: {
			en: "Empty Light",
			fr: "Lumière Vide",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may leave both Active Pokémon Confused and Poisoned.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez laisser les deux Pokémon Actifs Confus et Empoisonnés.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Lock Up",
			fr: "Cage",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 120
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Symbiont-GX",
			fr: "Parasite-GX",
		},
		text: {
			en: "Add the top 2 cards of your opponent's deck to their Prize cards. (You can't use more than 1 GX attack in a game.)",
			fr: "Ajoutez les 2 cartes du dessus du deck de votre adversaire à ses cartes Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card

