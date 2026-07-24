import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Tortank",
		de: "Turtok"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [185],

	hp: 60,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Copy",
				fr: "Écume",
				de: "Blubber"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. Copy copies that attack. This attack does nothing if Sudowoodo doesn't have the Energy necessary to use that attack. (You must still do anything else required in order to use that attack.)",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Draw",
				fr: "Double canon",
				de: "Doppel-Kanone"
			},
			effect: {
				en: "Search your deck for a basic Energy card and attach it to Sudowoodo. Shuffle your deck afterward.",
				fr: "Lancez 2 pièces. Cette attaque fait 40 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "40x",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83889,
				cardmarket: 274879
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
