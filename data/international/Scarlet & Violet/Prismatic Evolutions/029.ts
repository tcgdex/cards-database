import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [135],
	set: Set,

	name: {
		'en-us': "Jolteon",
		'fr-fr': "Voltali",
		'es-es': "Jolteon",
		'pt-br': "Jolteon",
		'it-it': "Jolteon",
		'de-de': "Blitza"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Linear Attack",
			'fr-fr': "Attaque Linéaire",
			'es-es': "Ataque Lineal",
			'pt-br': "Ataque Linear",
			'it-it': "Attacco Lineare",
			'de-de': "Linearer Angriff"
		},

		effect: {
			'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 30 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Fighting Lightning",
			'fr-fr': "Foudre Hostile",
			'es-es': "Rayo Luchador",
			'pt-br': "Luta Relâmpago",
			'it-it': "Fulmine Combattente",
			'de-de': "Blitzfäuste"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 90 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex o un Pokémon V, este ataque hace 90 puntos de daño más.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex ou um Pokémon V, este ataque causará 90 pontos de dano a mais.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex o un Pokémon-V, questo attacco infligge 90 danni in più.",
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

	illustrator: "sui",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805418,
				tcgplayer: 610384
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805418,
				tcgplayer: 610384
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806446,
				tcgplayer: 610555
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806447,
				tcgplayer: 610656
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 858732,
			}
		},
	],
}

export default card
