import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Latios",
		fr: "Latios",
		es: "Latios",
		it: "Latios",
		pt: "Latios",
		de: "Latios"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "hatachu",

	description: {
		en: "It understands human speech and is highly intelligent. It is a tender Pokémon that dislikes fighting."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Blue Assist"
		},

		effect: {
			en: "Once during your turn, you may attach a Psychic Energy card from your hand to 1 of your Latias."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Psychic", "Colorless"],

		name: {
			en: "Luster Purge"
		},

		damage: 210,

		effect: {
			en: "Discard 2 Energy from this Pokémon."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card