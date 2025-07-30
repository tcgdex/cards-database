import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Switch",
		fr: "Échange",
		de: "Tausch"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Échangez un de vos Pokémon actifs avec un Pokémon de votre Banc.",
		en: "Switch 1 of your Active Pokémon with 1 of your Benched Pokémon.",
		de: "Tausche 1 deiner Aktiven Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Item",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0,

	thirdParty: {
		cardmarket: 279074
	}
}

export default card
