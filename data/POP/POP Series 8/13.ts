import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Croagunk",
		de: "Glibunkel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		453,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ghastly Sound",
				de: "Grässliche Geräusche"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can’t play any Supporter cards from his or her hand during his or her next turn.",
				de: "Wirf 1 Münze. Bei „Kopf“ kann dein Gegner in seinem nächsten Zug keine Unterstützerkarten von seiner Hand spielen."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Finger Poke",
				de: "Fingerstubser"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt vergiftet."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	description: {
		en: "Its cheeks hold poison sacs. It tries to catch foes off guard to jab them with toxic fingers.",
		de: "In seinen Backen sammelt sich Gift. Es versucht, Beute zu überraschen und mit Giftfingern zu schnappen."
	},

	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278414,
				tcgplayer: 84475
			}
		},
		{
			type: "holo",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 278414,
				tcgplayer: 84475
			}
		},
	],
}

export default card
