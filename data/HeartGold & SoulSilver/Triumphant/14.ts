import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Banette",
		fr: "Branette",
		de: "Banette"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		354,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Lost Crush",
				fr: "Broyage perdu",
				de: "Nirgendwo-Zertrümmerer"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 Energy card attached to 1 of your opponent’s Pokémon and put it in the Lost Zone.",
				fr: "Lancez une pièce. Si c’est face, choisissez une carte Énergie attachée à l’un des Pokémon de votre adversaire et placez-la dans la Zone Perdue.",
				de: "Wirf eine Münze. Wähle bei \"Kopf\" 1 an 1 Pokémon deines Gegners angelegte Energiekarte und lege sie ins Nirgendwo."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Breakdown",
				fr: "Réaction",
				de: "Rückkopplung"
			},
			effect: {
				en: "Count the number of cards in your opponent’s hand. Put that many damage counters on the Defending Pokémon.",
				fr: "Comptez le nombre de cartes dans la main de votre adversaire. Placez un nombre équivalent de marqueurs de dégât sur le Pokémon Défenseur.",
				de: "Zähle die Anzahl der Handkarten deines Gegners. Lege ebenso viele Schadensmarken auf das Verteidigende Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "This Pokémon developed from an abandoned doll that amassed a grudge. It is seen in dark alleys."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279544,
		tcgplayer: 83724
	}
}

export default card
