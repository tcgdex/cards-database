import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-66",
	localId: 66,

	// Card informations
	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
	},

	hp: 150,

	type: [
		Type.LIGHTNING,
	],

	dexId: 604,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/66/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/66/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/66/high",
		},
	},

	evolveFrom: {
		en: "Eelektrik",
		fr: "Lampéroie",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},

	abilities: [{
		id: 1391,
		type: AbilityType.TALENT,
		name: {
			en: "Electric Swamp",
			fr: "Marais Électrique",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is in your hand and you have at least 4 Lightning Energy cards in play, you may play this Pokémon onto your Bench. If you do, move any number of Lightning Energy from your other Pokémon to this Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est dans votre main et si vous avez au moins 4 cartes Énergie Lightning en jeu, vous pouvez jouer ce Pokémon sur votre Banc. Dans ce cas, déplacez autant d’Énergies Lightning que vous voulez de vos autres Pokémon vers ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hover Over",
			fr: "Flotter",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
