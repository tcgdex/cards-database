import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Démolosse",
		de: "Hundemon"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Houndour",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fireworks",
				fr: "Feu d'artifice",
				de: "Feuerwerk"
			},
			effect: {
				en: "Flip a coin. If tails, discard 1 Energy card attached to Houndoom.",
				fr: "Lancez une pièce. Si c'est pile, défaussez-vous d'une carte Énergie  attachée à Démolosse.",
				de: "Wirf eine Münze. Lege bei 'Zahl' eine an Hundemon angelegte -Energiekarte auf deinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Impact",
				fr: "Sombre impact",
				de: "Finsterer Einfluss"
			},
			effect: {
				en: "The Defending Pokémon can't use any Poké-Powers until the end of your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas utiliser de Poké-Powers jusqu'à la fin du prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann bis zum Ende des nächsten Zuges deines Gegners keine Poké-Power verwenden."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275050,
		tcgplayer: 86203
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
