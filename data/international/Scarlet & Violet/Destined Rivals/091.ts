import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [57],
	set: Set,

	name: {
		'en-us': "Primeape",
		'fr-fr': "Colossinge",
		'de-de': "Rasaff",
		'it-it': "Primeape",
		'es-es': "Primeape",
		'pt-br': "Primeape",
		'es-mx': "Primeape"
	},


	illustrator: "GOTO minori",

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
		'de-de': "Menki",
		'it-it': "Mankey",
		'es-es': "Mankey",
		'pt-br': "Mankey",
		'es-mx': "Mankey"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Drag Off",
			'fr-fr': "Traîne",
			'de-de': "Wegzerren",
			'it-it': "Trascinato Via",
			'es-es': "Jalón",
			'pt-br': "Arrastar para Fora",
			'es-mx': "Jaloneo"
		},

		effect: {
			'en-us': "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. This attack does 30 damage to the new Active Pokémon.",
			'fr-fr': "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Cette attaque inflige 30 dégâts au nouveau Pokémon Actif.",
			'de-de': "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Diese Attacke fügt dem neuen Aktiven Pokémon 30 Schadenspunkte zu.",
			'it-it': "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Questo attacco infligge 30 danni al nuovo Pokémon attivo.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Este ataque hace 30 puntos de daño al nuevo Pokémon Activo.",
			'pt-br': "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. Este ataque causa 30 pontos de dano ao novo Pokémon Ativo.",
			'es-mx': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Este ataque hace 30 puntos de daño al nuevo Pokémon Activo."
		}
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825965,
				tcgplayer: 632900
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825965,
				tcgplayer: 632900
			}
		},
	],
}

export default card
