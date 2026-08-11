import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [643],
	set: Set,

	name: {
		'en-us': "N's Reshiram",
		'fr-fr': "Reshiram de N",
		'es-es': "Reshiram de N",
		'de-de': "Ns Reshiram",
		'it-it': "Reshiram di N",
		'pt-br': "Reshiram do N",
		'es-mx': "Reshiram de N"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Lightning"],

		name: {
			'en-us': "Powerful Rage",
			'fr-fr': "Rage Massive",
			'es-es': "Ira Recia",
			'de-de': "Mächtige Wut",
			'it-it': "Forzafuria",
			'pt-br': "Ira Poderosa",
			'es-mx': "Furia Dominante"
		},

		effect: {
			'en-us': "This attack does 20 damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada contador de dano neste Pokémon.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon."
		},

		damage: "20×"
	}, {
		cost: ["Fire", "Fire", "Lightning", "Colorless"],

		name: {
			'en-us': "Virtuous Flame",
			'fr-fr': "Flamme Vertueuse",
			'es-es': "Llama Virtuosa",
			'de-de': "Rechtschaffene Flamme",
			'it-it': "Fiamma Virtuosa",
			'pt-br': "Chama Inocente",
			'es-mx': "Llama Virtuosa"
		},

		damage: 170
	}],

	retreat: 2,
	regulationMark: "I",
	illustrator: "rika",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817268,
				tcgplayer: 623543
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817268,
				tcgplayer: 623543
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			stamp: ['player-rewards-program']
		},
		{
			type: 'normal',
			stamp: ['player-rewards-program']
		}
	],
}

export default card
