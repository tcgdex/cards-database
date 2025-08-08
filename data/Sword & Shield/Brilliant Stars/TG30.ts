import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [892],
	set: Set,

	name: {
		en: "Rapid Strike Urshifu VMAX",
		fr: "Shifours Mille Poings VMAX",
		es: "Urshifu Golpe Fluido VMAX",
		it: "Urshifu Pluricolpo VMAX",
		pt: "Urshifu Golpe Fluido VMAX",
		de: "Fließender-Angriff-Wulaosu VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rapid Strike Urshifu V",
		fr: "Shifours Mille Poings-V",
		es: "Urshifu Golpe Fluido V",
		it: "Urshifu Pluricolpo-V",
		pt: "Urshifu Golpe Fluido V",
		de: "Fließender-Angriff-Wulaosu-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Gale Thrust",
			fr: "Coup d'Bourrasque",
			es: "Impulso Vendaval",
			it: "Raffica di Stoccate",
			pt: "Propulsão de Tempestade",
			de: "Orkanstoß"
		},

		effect: {
			en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 120 more damage.",
			fr: "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 120 puntos de daño más.",
			it: "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 120 danni in più.",
			pt: "Se este Pokémon foi movido do seu Banco para o Campo Ativo durante este turno, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "G-Max Rapid Flow",
			fr: "Multicoup G-Max",
			es: "Gigagolpe Fluido",
			it: "Gigaflusso Rapido",
			pt: "Fluxo Veloz G-Max",
			de: "Giga-Turbofluss"
		},

		effect: {
			en: "Discard all Energy from this Pokémon. This attack does 120 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez toute l'Énergie de ce Pokémon. Cette attaque inflige 120 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Descarta todas las Energías de este Pokémon. Este ataque hace 120 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Scarta tutte le Energie da questo Pokémon. Questo attacco infligge 120 danni a due dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Descarte todas as Energias deste Pokémon. Este ataque causa 120 pontos de dano a 2 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 2 Pokémon deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 2,
	regulationMark: "E",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card