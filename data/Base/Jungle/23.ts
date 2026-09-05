import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen",
		it: "Nidoqueen",
		de: "Nidoqueen"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		31,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nidorina",
		fr: "Nidorina",
		it: "Nidorina",
		de: "Nidorina"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Boyfriends",
				fr: "Fiancés",
				it: "Amorino",
				de: "Minnesänger"
			},
			effect: {
				en: "Does 20 damage plus 20 more damage for each Nidoking you have in play.",
				fr: "Inflige 20 dégâts plus 20 dégâts supplémentaires pour chaque Nidoking que vous avez en jeu.",
				it: "Infligge 20 danni più altri 20 danni per ogni Nidoking che hai in gioco.",
				de: "Fügt 20 Schadenspunkte plus 20 weitere Schadenspunkte für jeden Nidoking zu, den du im Spiel hast."
			},
			damage: "20+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Punch",
				fr: "Ultimapoing",
				it: "Mega Pugno",
				de: "Megahieb"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		en: "Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.",
		fr: "Ses écailles très résistantes et son corps massif sont des armes dévastatrices.",
		it: "Le dure squame gli assicurano un'eccellente protezione; usa la sua corporatura massiccia per eseguire mosse potenti.",
		de: "Seine harten Schuppen bieten ihm starken Schutz. Es nutzt seine massige Gestalt für kräftige Bewegungen."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273804,
				tcgplayer: 106985
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273804,
				tcgplayer: 106985
			}
		}
	],
}

export default card
