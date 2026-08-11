import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [466],
	set: Set,

	name: {
		'en-us': "Electivire ex",
		'fr-fr': "Élekable-ex",
		'de-de': "Elevoltek-ex",
		'it-it': "Electivire-ex",
		'es-es': "Electivire ex",
		'pt-br': "Electivire ex",
		'es-mx': "Electivire ex"
	},


	suffix: "ex",
	illustrator: "PLANETA Mochizuki",

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
		'de-de': "Elektek",
		'it-it': "Electabuzz",
		'es-es': "Electabuzz",
		'pt-br': "Electabuzz",
		'es-mx': "Electabuzz"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Dual Bolt",
			'fr-fr': "Double Éclair",
			'de-de': "Dualblitz",
			'it-it': "Doppio Lampo",
			'es-es': "Rayo Dual",
			'pt-br': "Raio Duplo",
			'es-mx': "Rayo Dual"
		},

		effect: {
			'en-us': "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt 2 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge 50 danni a due dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'es-es': "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque causa 50 pontos de dano a 2 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "High-Voltage Press",
			'fr-fr': "Pression Haute-Tension",
			'de-de': "Starkstromdruck",
			'it-it': "Pressa Folgorante",
			'es-es': "Presión Alto Voltaje",
			'pt-br': "Compressão de Alta Voltagem",
			'es-mx': "Prensa de Alto Voltaje"
		},

		effect: {
			'en-us': "If this Pokémon has at least 2 extra Energy attached (in addition to this attack's cost), this attack does 100 more damage.",
			'fr-fr': "Si au moins 2 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 100 dégâts supplémentaires.",
			'de-de': "Wenn an dieses Pokémon mindestens 2 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 100 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon ha almeno due Energie extra assegnate, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 100 danni in più.",
			'es-es': "Si este Pokémon tiene por lo menos 2 Energías adicionales unidas (además de las del coste de este ataque), este ataque hace 100 puntos de daño más.",
			'pt-br': "Se este Pokémon tiver pelo menos 2 Energias adicionais ligadas a ele (além do custo deste ataque), este ataque causará 100 pontos de dano a mais.",
			'es-mx': "Si este Pokémon tiene al menos 2 Energías adicionales unidas (además de las del costo de este ataque), este ataque hace 100 puntos de daño más."
		},

		damage: "180+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 826086,
				tcgplayer: 633012
			}
		},
	],
}

export default card
