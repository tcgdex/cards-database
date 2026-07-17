import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Rock-hard scales and oil-filled swim bladders allow this Pokémon to survive the intense water pressure of the deep sea.",
		de: "Dank seiner steinharten Schuppen und mit Fett gefüllten Schwimmblasen kann es dem Wasserdruck der Tiefsee standhalten."
	},

	name: {
		en: "Relicanth",
		fr: "Relicanth",
		es: "Relicanth",
		'es-mx': "Relicanth",
		de: "Relicanth"
	},

	illustrator: "Naoyo Kumura",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [369],
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Fossil Beatdown",
			de: "Fossile Abreibung"
		},

		cost: ["Colorless"],

		damage: "10+",

		effect: {
			en: "This attack does 30 more damage for each of your Benched Pokémon with \"Antique\" in its name.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank, bei dem „Antikes\" oder „Antiker\" zum Namen gehört, 30 Schadenspunkte mehr zu."
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
				cardmarket: 895805,
				tcgplayer: 704774
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895805,
				tcgplayer: 704774
			}
		},
	],
}

export default card
