import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [52],
	set: Set,

	name: {
		'en-us': "Galarian Meowth",
		'fr-fr': "Miaouss de Galar",
		'es-es': "Meowth de Galar",
		'it-it': "Meowth di Galar",
		'pt-br': "Meowth de Galar",
		'de-de': "Galar-Mauzi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "0313",

	description: {
		'en-us': "These daring Pokémon have coins on their foreheads. Darker coins are harder, and harder coins garner more respect among Meowth."
	},

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Growl",
			'fr-fr': "Rugissement",
			'de-de': "Heuler",
			'es-es': "Gruñido",
			'pt-br': "Rosnadura",
			'it-it': "Ruggito"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon's attacks do 20 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'de-de': "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 20 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor causarão 20 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 20 danni in meno, prima di aver applicato debolezza e resistenza."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'de-de': "Schlitzer",
			'es-es': "Cuchillada",
			'pt-br': "Talho",
			'it-it': "Lacerazione"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582808,
				tcgplayer: 253326
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582808,
				tcgplayer: 253326
			}
		},
	],
}

export default card
