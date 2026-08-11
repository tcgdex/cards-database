import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Kingler δ",
		fr: "Krabboss δ",
		de: "Kingler"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		99,
	],

	hp: 80,

	types: [
		"Fire",
		"Metal",
	],

	evolveFrom: {
		en: "Krabby",
		fr: "Krabby"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Body Slam",
				fr: "Plaquage",
				de: "Bodyslam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Prop-up Pinchers",
				fr: "Pinces calantes",
				de: "Greifzangen"
			},
			effect: {
				en: "If Kingler has a Pokémon Tool card attached to it, this attack does 40 damage plus 40 more damage.",
				fr: "Si Krabboss possède une carte Outil Pokémon, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires.",
				de: "Wenn an Kingler eine Pokémon-Ausrüstung angelegt ist, fügt dieser Angriff 40 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 3,

	thirdParty: {
		cardmarket: 277103
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
