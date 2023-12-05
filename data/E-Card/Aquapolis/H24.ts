import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
		de: "Mogelbaum"
	},
	illustrator: "Kagemaru Himeno",
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
				en: "Choose 1 of the Defending Pokémon's attacks. Copy copies that attack. This attack does nothing if Sudowoodo doesn't have the Energy necessary to use that attack. (You must still do anything else required in order to use that attack.)",
				fr: "Choisissez une des attaques du Pokémon Défenseur. Copiage copie cette attaque. Cette attaque ne fait rien si Simularbre n'a pas l'Énergie nécessaire pour utiliser cette attaque. (Vous devez toujours accomplir les autres actions afin d'utiliser cette attaque.)",
				de: "Choose 1 of the Defending Pokémon's attacks. Copy copies that attack. This attack does nothing if Sudowoodo doesn't have the Energy necessary to use that attack. (You must still do anything else required in order to use that attack.)"
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Energy Draw",
				fr: "Absorption d'énergie",
				de: "Energy Draw"
			},
			effect: {
				en: "Search your deck for a basic Energy card and attach it to Sudowoodo. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Énergie de base et attachez-la à Simularbre. Mélangez ensuite votre deck.",
				de: "Search your deck for a basic Energy card and attach it to Sudowoodo. Shuffle your deck afterward."
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
