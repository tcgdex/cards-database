import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [462],
	set: Set,

	name: {
		'en-us': "Magnezone V",
		'fr-fr': "Magnézone V",
		'es-es': "Magnezone V",
		'it-it': "Magnezone V",
		'pt-br': "Magnezone V",
		'de-de': "Magnezone V"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Magnetic Tension",
			'fr-fr': "Tension Magnétique",
			'es-es': "Tensión Magnética",
			'it-it': "Tensione Magnetica",
			'pt-br': "Tensão Magnética",
			'de-de': "Magnetspannung"
		},

		effect: {
			'en-us': "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. This attack does 40 damage to the new Active Pokémon.",
			'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif. Cette attaque inflige 40 dégâts au nouveau Pokémon Actif.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Este ataque hace 40 puntos de daño al nuevo Pokémon Activo.",
			'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Questo attacco infligge 40 danni al nuovo Pokémon attivo.",
			'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). Este ataque causa 40 pontos de dano ao novo Pokémon Ativo.",
			'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Diese Attacke fügt dem neuen Aktiven Pokémon 40 Schadenspunkte zu."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Splitting Beam",
			'fr-fr': "Rayon Divergent",
			'es-es': "Rayo Dividido",
			'it-it': "Raggio Scisso",
			'pt-br': "Feixe Dividido",
			'de-de': "Spaltstrahl"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 2 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch 2 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674181,
				tcgplayer: 284117
			}
		},
	],
}

export default card
