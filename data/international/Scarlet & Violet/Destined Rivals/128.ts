import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [215],
	set: Set,

	name: {
		'en-us': "Team Rocket's Sneasel",
		'fr-fr': "Farfuret de la Team Rocket",
		'de-de': "Team Rockets Sniebel",
		'it-it': "Sneasel del Team Rocket",
		'es-es': "Sneasel del Team Rocket",
		'pt-br': "Sneasel da Equipe Rocket",
		'es-mx': "Sneasel del Equipo Rocket"
	},


	illustrator: "GIDORA",

	rarity: "Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'de-de': "Kratzer",
			'it-it': "Graffio",
			'es-es': "Arañazo",
			'pt-br': "Arranhão",
			'es-mx': "Arañazo"
		},

		damage: 20
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Strike the Sleeper",
			'fr-fr': "Frappe en Plein Sommeil",
			'de-de': "Schlag den Schläfer",
			'it-it': "Carognata",
			'es-es': "Golpea al Dormilón",
			'pt-br': "Passar a Perna",
			'es-mx': "Golpe Inesperado"
		},

		effect: {
			'en-us': "This attack does 20 damage to 1 of your opponent's Benched Pokémon for each damage counter on that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 20 dégâts à l'un des Pokémon de Banc de votre adversaire pour chaque marqueur de dégâts sur ce Pokémon-là. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners für jede Schadensmarke auf jenem Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon nella panchina del tuo avversario per ogni segnalino danno presente su quel Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'es-es': "Este ataque hace 20 puntos de daño a uno de los Pokémon en Banca de tu rival por cada contador de daño en ese Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente para cada contador de dano naquele Pokémon. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival por cada contador de daño en ese Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		}
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826002,
				tcgplayer: 632936
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 826002,
				tcgplayer: 632936
			}
		},
	],
}

export default card
