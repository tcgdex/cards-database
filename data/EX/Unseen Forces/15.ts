import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
		de: "Mogelbaum"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		185,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Copy",
				fr: "Copiage",
				de: "Copy"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. Copy copies that attack. This attack does nothing if Sudowoodo doesn't have the Energy necessary to use that attack. (You must still do anything else required for that attack.) Sudowoodo performs that attack.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Copiage copie cette attaque. Cette attaque est sans effet si Simularbre ne possède pas suffisamment d'Énergie pour utiliser cette attaque. (Vous devez toujours faire ce que l'attaque indique). Simularbre utilise cette attaque.",
				de: "Choose 1 of the Defending Pokémon's attacks. Copy copies that attack. This attack does nothing if Sudowoodo doen't have the Energy necessary to use that attack. (You must still do anything else required for that attack.) Sudowoodo performs that attack."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Karate Chop",
				fr: "Poing-Karaté",
				de: "Karate Chop"
			},
			effect: {
				en: "Does 50 damage minus 10 damage for each damage counter on Sudowoodo.",
				fr: "Inflige 50 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Simularbre.",
				de: "Does 50 damage minus 10 damage for each damage counter on Sudowoodo."
			},
			damage: "50-",

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
		cardmarket: 276661,
		tcgplayer: 89593
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
