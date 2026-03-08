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

	dexId: [
		5,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche"
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
				de: "Smokescreen"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est face, cette attaque est sans effet.",
				de: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flip a coin. if tails, that attack does nothing."
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
				de: "Fireworks"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy card attached to Charmeleon.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une carte Énergie  attachée à Reptincel.",
				de: "Flip a coin. If tails, discard a  Energy card attached to Charmeleon."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 84225,
		cardmarket: 275976
	}
}

export default card
