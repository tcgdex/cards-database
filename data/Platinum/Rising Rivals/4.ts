import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Floatzel GL",
		fr: "Mustéflott  Niv. 37",
		de: "Bojelin GL"
	},

	illustrator: "Midori Harada",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		419,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Incite",
				fr: "Inciter",
				de: "Anspornen"
			},
			effect: {
				en: "Search your discard pile for up to 2 Supporter cards, show them to your opponent, and put them into your hand.",
				fr: "Choisissez dans votre pile de défausse jusqu'à 2 cartes Supporter, montrez-les à votre adversaire et placez-les dans votre main.",
				de: "Durchsuche deinen Ablagestapel nach bis zu 2 Unterstützerkarten, zeige sie deinem Gegner und nimm sie auf die Hand."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Giant Wave",
				fr: "Vague géante",
				de: "Riesenwelle"
			},
			effect: {
				en: "Floatzel can't use Giant Wave during your next turn.",
				fr: "Mustéflott  ne peut pas utiliser Vague géante lors de votre prochain tour.",
				de: "Bojelin GL kann Riesenwelle in deinem nächsten Zug nicht einsetzen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 85517
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
