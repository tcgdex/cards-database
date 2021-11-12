import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Genesect V",
		fr: "Genesect V",
		es: "Genesect V",
		it: "Genesect V",
		pt: "Genesect V",
		de: "Genesect V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "PLANETA Tsuji",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fusion Strike System"
		},

		effect: {
			en: "Once during your turn, you may draw cards until you have as many cards in your hand as you have Fusion Strike Pokémon in play."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Techno Blast"
		},

		damage: 210,

		effect: {
			en: "During your next turn, this Pokémon can't attack."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card