import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Oshawott",
		fr: "Moustillon",
		de: "Ottaro"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		501,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Pulse",
				fr: "Vibraqua",
				de: "Aquawelle"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				de: "Wirf 1 Münze. Bei „Kopf“ schläft das Verteidigende Pokémon jetzt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It fights using the scalchop on its stomach. In response to an attack, it retaliates immediately by slashing.",
		de: "Kämpft mit der Muschel auf seinem Bauch. Pariert es einen Angriff, schlägt es sofort mit einer Schnitt-Attacke zurück."
	},
	
	variants: [
		{
			type: 'normal',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538968,
				tcgplayer: 232335
			}
		},
		{
			type: 'holo',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538978,
				tcgplayer: 232335
			}
		}
	]
}

export default card

