import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
		es: "Sudowoodo",
		it: "Sudowoodo",
		pt: "Sudowoodo",
		de: "Mogelbaum"
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
				en: "Watch and Learn",
				fr: "Apprentissage",
				es: "Mira y Aprende",
				it: "Guarda e Impara",
				pt: "Observe e Aprenda",
				de: "Leben und lernen"
			},
			effect: {
				en: "If your opponent’s Pokémon used an attack during his or her last turn, use it as this attack.",
				fr: "Si l’un des Pokémon de votre adversaire a utilisé une attaque pendant son dernier tour, utilisez-la en tant que cette attaque.",
				es: "Si alguno de los Pokémon de tu rival usó un ataque durante su último turno, úsalo para este ataque.",
				it: "Se il Pokémon del tuo avversario ha usato un attacco durante il suo ultimo turno, usalo al posto di questo attacco.",
				pt: "Se o Pokémon do seu oponente tiver usado um ataque durante sua última vez de jogar, use-o como este ataque.",
				de: "Wenn das Pokémon deines Gegners während seines letzten Zuges mit einer Attacke angegriffen hat, benutze sie für diesen Angriff."
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



}

export default card
