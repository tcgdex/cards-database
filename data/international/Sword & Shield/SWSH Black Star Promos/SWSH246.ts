import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [461],
	set: Set,

	name: {
		'fr-fr': "Dimoret",
		'de-de': "Snibunna",
		'es-es': "Weavile",
		'pt-br': "Weavile",
		'it-it': "Weavile",
		'en-us': "Weavile"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		'fr-fr': "Farfuret",
		'de-de': "Sniebel",
		'es-es': "Sneasel",
		'pt-br': "Sneasel",
		'it-it': "Sneasel",
		'en-us': "Sneasel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Griffe Persistante",
			'de-de': "Heimsuchende Klaue",
			'es-es': "Garra Persecución",
			'pt-br': "Garra da Perseguição",
			'it-it': "Inseguiartiglio",
			'en-us': "Pursuit Claw"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 20 dégâts à l'un des Pokémon de Banc de votre adversaire pour chaque marqueur de dégâts sur ce Pokémon-là. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners für jede Schadensmarke auf jenem Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival por cada contador de daño en ese Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente para cada contador de dano naquele Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon in panchina del tuo avversario per ogni segnalino danno su quel Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'en-us': "This attack does 20 damage to 1 of your opponent's Benched Pokémon for each damage counter on that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'fr-fr': "Tranch'Griffe",
			'de-de': "Klauenschlitzer",
			'es-es': "Cuchillada Garra",
			'pt-br': "Golpe de Garra",
			'it-it': "Lacerartiglio",
			'en-us': "Claw Slash"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	description: {
		'en-us': "They attack their quarry in packs. Prey as large as Mamoswine easily fall to the teamwork of a group of Weavile."
	},

	thirdParty: {
		cardmarket: 665989
	}
}

export default card
