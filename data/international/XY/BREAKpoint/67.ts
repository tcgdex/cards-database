import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Sudowoodo",
		'fr-fr': "Simularbre",
		'es-es': "Sudowoodo",
		'it-it': "Sudowoodo",
		'pt-br': "Sudowoodo",
		'de-de': "Mogelbaum"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		185,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Watch and Learn",
				'fr-fr': "Apprentissage",
				'es-es': "Mira y Aprende",
				'it-it': "Guarda e Impara",
				'pt-br': "Observe e Aprenda",
				'de-de': "Leben und lernen"
			},
			effect: {
				'en-us': "If your opponent's Pokémon used an attack during his or her last turn, use it as this attack.",
				'fr-fr': "Si l'un des Pokémon de votre adversaire a utilisé une attaque pendant son dernier tour, utilisez-la en tant que cette attaque.",
				'es-es': "Si alguno de los Pokémon de tu rival usó un ataque durante su último turno, úsalo para este ataque.",
				'it-it': "Se il Pokémon del tuo avversario ha usato un attacco durante il suo ultimo turno, usalo al posto di questo attacco.",
				'pt-br': "Se o Pokémon do seu oponente tiver usado um ataque durante sua última vez de jogar, use-o como este ataque.",
				'de-de': "Wenn das Pokémon deines Gegners während seines letzten Zuges mit einer Attacke angegriffen hat, benutze sie für diesen Angriff."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It disguises itself as a tree to avoid attack. It hates water, so it will disappear if it starts raining.",
	},

	thirdParty: {
		cardmarket: 288242,
		tcgplayer: 111606
	}
}

export default card
