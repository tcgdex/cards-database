import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Arbok",
		fr: "Arbok",
		de: "Arbok"
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
		en: "Ekans",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Terror Strike",
				fr: "Raid terrifiant",
				de: "Terrorschlag"
			},
			effect: {
				en: "Flip a coin. If heads and if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
				fr: "Lancez une pièce. Si c'est face et si votre adversaire a un ou plusieurs Pokémon sur son Banc, il choisit l'un d'eux et l'échange avec son Pokémon Défenseur. (Infligez les dégâts avant d'échanger les Pokémon.)",
				de: "Wirf eine Münze. Bei 'Kopf' und falls dein Gegner irgendwelche Pokémon auf der Bank hat, wählt er eines von ihnen und tauscht es mit dem verteidigenden Pokémon aus. (Füge die Schadenspunkte vor dem Auswechseln des Pokémon zu.)"
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
				en: "Poison Fang",
				fr: "Croc-poison",
				de: "Giftzahn"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "das verteidigende Pokémon ist jetzt vergiftet."
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

	description: {
		fr: "Les motifs féroces peints sur son corps changent selon son environnement."
	}
}

export default card
