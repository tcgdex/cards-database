import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Charmeleon",
		fr: "Reptincel",
		de: "Glutexo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [5],

	hp: 70,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche",
		de: "Glumanda"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Smokescreen",
				fr: "Brouillard",
				de: "Rauchwolke"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est face, cette attaque est sans effet.",
				de: "Falls das verteidigende Pokémon während des nächsten gegnerischen Zuges anzugreifen versucht, wirft dein Gegner 1 Münze. Bei „Zahl“ fügt dieser Angriff keine Schadenspunkte zu."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fireworks",
				fr: "Feux d'artifices",
				de: "Feuerwerk"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy card attached to Charmeleon.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une carte Énergie  attachée à Reptincel.",
				de: "Wirf 1 Münze. Entferne bei „Zahl“ eine {R}-Energiekarte von Glutexo."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84225,
				cardmarket: 275976
			},
		},
		{
			type: "holo",
			stamp: ["state-championships"],
			thirdParty: {
				tcgplayer: 285694,
				cardmarket: 275976
			},
		},
	],

}

export default card
