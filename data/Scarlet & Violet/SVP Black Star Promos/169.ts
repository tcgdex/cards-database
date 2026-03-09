import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [135],
	set: Set,

	name: {
		en: "Jolteon",
		pt: "Jolteon",
		fr: "Voltali",
		de: "Blitza",
		es: "Jolteon",
		it: "Jolteon"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning"],

			name: {
				en: "Linear Attack",
				pt: "Ataque Linear",
				fr: "Attaque Linéaire",
				de: "Linearer Angriff",
				es: "Ataque Lineal",
				it: "Attacco Lineare"
			},

			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
				fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
				es: "Este ataque hace 30 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
			}},
		{
			cost: ["Lightning", "Colorless", "Colorless"],

			name: {
				en: "Fighting Lightning",
				pt: "Luta Relâmpago",
				fr: "Foudre Hostile",
				de: "Blitzfäuste",
				es: "Rayo Luchador",
				it: "Fulmine Combattente"
			},

			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 90 more damage.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex ou um Pokémon V, este ataque causará 90 pontos de dano a mais.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 90 dégâts supplémentaires.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex oder Pokémon-V ist, fügt diese Attacke 90 Schadenspunkte mehr zu.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon ex o un Pokémon V, este ataque hace 90 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex o un Pokémon-V, questo attacco infligge 90 danni in più."
			},

			damage: "90+"
		},
	],

	retreat: 0,
	regulationMark: "G",
	illustrator: "Nisota Niso"
}

export default card