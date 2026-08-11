import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [135],
	set: Set,

	name: {
		'fr-fr': "Voltali",
		'en-us': "Jolteon",
		'es-es': "Jolteon",
		'it-it': "Jolteon",
		'pt-br': "Jolteon",
		'de-de': "Blitza"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	evolveFrom: {
		'fr-fr': "Évoli",
		'en-us': "Eevee",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Attaque Linéaire",
			'en-us': "Linear Attack",
			'es-es': "Ataque Lineal",
			'it-it': "Attacco Lineare",
			'pt-br': "Ataque Linear",
			'de-de': "Linearer Angriff"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque hace 30 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Foudre Hostile",
			'en-us': "Fighting Lightning",
			'es-es': "Rayo Luchador",
			'it-it': "Fulmine Combattente",
			'pt-br': "Luta Relâmpago",
			'de-de': "Blitzfäuste"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 90 dégâts supplémentaires.",
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 90 more damage.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex o un Pokémon V, este ataque hace 90 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex o un Pokémon-V, questo attacco infligge 90 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex ou um Pokémon V, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex oder Pokémon-V ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	description: {
		'en-us': "It concentrates the weak electric charges emitted by its cells and launches wicked lightning bolts.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733730,
				tcgplayer: 516698,
				cardtrader: 261233
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733730,
				tcgplayer: 516698,
				cardtrader: 261233
			}
		},
	],

	illustrator: "sui",

	
}

export default card
