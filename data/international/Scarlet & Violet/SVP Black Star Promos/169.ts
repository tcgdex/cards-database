import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [135],
	set: Set,

	name: {
		'en-us': "Jolteon",
		'pt-br': "Jolteon",
		'fr-fr': "Voltali",
		'de-de': "Blitza",
		'es-es': "Jolteon",
		'it-it': "Jolteon"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning"],

			name: {
				'en-us': "Linear Attack",
				'pt-br': "Ataque Linear",
				'fr-fr': "Attaque Linéaire",
				'de-de': "Linearer Angriff",
				'es-es': "Ataque Lineal",
				'it-it': "Attacco Lineare"
			},

			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
				'es-es': "Este ataque hace 30 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
			}},
		{
			cost: ["Lightning", "Colorless", "Colorless"],

			name: {
				'en-us': "Fighting Lightning",
				'pt-br': "Luta Relâmpago",
				'fr-fr': "Foudre Hostile",
				'de-de': "Blitzfäuste",
				'es-es': "Rayo Luchador",
				'it-it': "Fulmine Combattente"
			},

			effect: {
				'en-us': "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 90 more damage.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex ou um Pokémon V, este ataque causará 90 pontos de dano a mais.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 90 dégâts supplémentaires.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex oder Pokémon-V ist, fügt diese Attacke 90 Schadenspunkte mehr zu.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex o un Pokémon V, este ataque hace 90 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex o un Pokémon-V, questo attacco infligge 90 danni in più."
			},

			damage: "90+"
		},
	],

	retreat: 0,
	regulationMark: "G",
	illustrator: "Nisota Niso",
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 805366,
				tcgplayer: 653353
			},
		}
	],
}

export default card
