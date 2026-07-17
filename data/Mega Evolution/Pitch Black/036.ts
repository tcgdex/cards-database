import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Litwick",
		fr: "Funécire",
		es: "Litwick",
		'es-mx': "Litwick",
		de: "Lichtel"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [607],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Will-O-Wisp"
		},

		cost: ["Psychic"],

		damage: 20
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895823,
				tcgplayer: 704793
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895823,
				tcgplayer: 704793
			}
		},
	],
}

export default card
