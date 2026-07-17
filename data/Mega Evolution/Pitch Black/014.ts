import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.",
		de: "Im Herbst legt es an Gewicht zu und erscheint in prächtigen Farben, um so einen Partner anzulocken."
	},

	name: {
		en: "Seaking",
		fr: "Poissoroy",
		es: "Seaking",
		'es-mx': "Seaking",
		de: "Golking"
	},

	illustrator: "OKUBO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [119],
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Goldeen"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Hydro Jet",
			de: "Hydrostrahl"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 30 damage to 1 of your Benched Pokémon for each Water Energy attached to this Pokémon",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners für jede an dieses Pokémon angelegte {W}-Energie 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895802,
				tcgplayer: 704771
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895802,
				tcgplayer: 704771
			}
		},
	],
}

export default card
