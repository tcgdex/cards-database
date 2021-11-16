import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Drednaw",
		fr: "Torgamord",
		es: "Drednaw",
		it: "Drednaw",
		pt: "Drednaw",
		de: "Kamalm"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Chewtle",
		fr: "Khélocrok",
		es: "Chewtle",
		it: "Chewtle",
		pt: "Chewtle",
		de: "Kamehaps"
	},

	stage: "Stage1",
	retreat: 4,
	regulationMark: "E",
	illustrator: "kodama",

	description: {
		en: "This Pokémon rapidly extends its retractable neck to sink its sharp fangs into distant enemies and take them down."
	},

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Hard Bite"
		},

		damage: "80+",

		effect: {
			en: "Flip a coin. If heads, this attack does 50 more damage."
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