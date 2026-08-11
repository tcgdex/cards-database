import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [724],
	set: Set,

	name: {
		'en-us': "Hisuian Decidueye",
		'fr-fr': "Archéduc de Hisui",
		'es-es': "Decidueye de Hisui",
		'it-it': "Decidueye di Hisui",
		'pt-br': "Decidueye de Hisui",
		'de-de': "Hisui-Silvarro"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Dartrix",
		'fr-fr': "Efflèche",
		'es-es': "Dartrix",
		'it-it': "Dartrix",
		'pt-br': "Dartrix",
		'de-de': "Arboretoss"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Piercing Claw",
			'fr-fr': "Griffe Perçante",
			'es-es': "Garra Perforadora",
			'it-it': "Artiglio Perforante",
			'pt-br': "Garra Perfurante",
			'de-de': "Durchdringende Kralle"
		},

		effect: {
			'en-us': "This attack does 30 damage for each damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño por cada contador de daño en el Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada contador de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 30 Schadenspunkte zu."
		},

		damage: "30×"
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Direct Arrow",
			'fr-fr': "Flèche Directe",
			'es-es': "Flecha Directa",
			'it-it': "Freccia Diretta",
			'pt-br': "Flecha Direta",
			'de-de': "Direkter Pfeil"
		},

		effect: {
			'en-us': "This attack does 80 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 80 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 80 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 80 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 80 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 80 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "The air stored inside the rachises of Decidueye's feathers insulates the Pokémon against Hisui's extreme cold. This is firm proof that evolution can be influenced by environment.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658692,
				tcgplayer: 272283
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658692,
				tcgplayer: 272283
			}
		},
	],
}

export default card
