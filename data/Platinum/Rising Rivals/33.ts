import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex Niv. 37",
		de: "Relaxo"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		143,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Pick and Collect",
				fr: "Choisir et collectionner",
				de: "Auswählen und Einsammeln"
			},
			effect: {
				en: "Search your discard pile for up to 4 basic Energy cards, show them to your opponent, and put them into your hand.",
				fr: "Choisissez dans votre pile de défausse jusqu'à 4 cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main.",
				de: "Durchsuche deinen Ablagestapel nach bis zu 4 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Roll Over",
				fr: "Se retourner",
				de: "Umdrehen"
			},
			effect: {
				en: "Flip a coin. If heads, both Snorlax and the Defending Pokémon are now Asleep. If tails, Snorlax is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, Ronflex et le Pokémon Défenseur sont maintenant Endormis. Si c'est pile, Ronflex est maintenant Endormi.",
				de: "Wirf 1 Münze. Bei \"Kopf\" schlafen Relaxo und das Verteidigende Pokémon jetzt. Bei \"Zahl\" schläft Relaxo jetzt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 278607,
		tcgplayer: 89390
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "reverse",
			foil: "league"
		}
	]
}

export default card
