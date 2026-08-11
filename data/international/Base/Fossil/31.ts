import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Arbok",
		'fr-fr': "Arbok",
		'de-de': "Arbok"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		24,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Ekans",
		'fr-fr': "Abo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Terror Strike",
				'fr-fr': "Raid terrifiant",
				'de-de': "Terrorschlag"
			},
			effect: {
				'en-us': "Flip a coin. If heads and if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
				'fr-fr': "Lancez une pièce. Si c'est face et si votre adversaire a un ou plusieurs Pokémon sur son Banc, il choisit l'un d'eux et l'échange avec son Pokémon Défenseur. (Infligez les dégâts avant d'échanger les Pokémon.)",
				'de-de': "Wirf eine Münze. Bei 'Kopf' und falls dein Gegner irgendwelche Pokémon auf der Bank hat, wählt er eines von ihnen und tauscht es mit dem verteidigenden Pokémon aus. (Füge die Schadenspunkte vor dem Auswechseln des Pokémon zu.)"
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Poison Fang",
				'fr-fr': "Croc-poison",
				'de-de': "Giftzahn"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "das verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It is rumored that the ferocious warning markings on its belly differ from area to area.",
		'fr-fr': "Les motifs féroces peints sur son corps changent selon son environnement."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273892,
				tcgplayer: 44433
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273892,
				tcgplayer: 44433
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
