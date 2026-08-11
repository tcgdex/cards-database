import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [555],
	set: Set,

	name: {
		'fr-fr': "Darumacho de Galar VMAX",
		'en-us': "Galarian Darmanitan VMAX",
		'es-es': "Darmanitan de Galar VMAX",
		'it-it': "Darmanitan di Galar VMAX",
		'pt-br': "Darmanitan de Galar VMAX",
		'de-de': "Galar-Flampivian VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],

	evolveFrom: {
		'fr-fr': "Darumacho de Galar-V",
		'en-us': "Galarian Darmanitan V",
		'es-es': "Darmanitan de Galar V",
		'it-it': "Darmanitan di Galar-V",
		'pt-br': "Darmanitan de Galar V",
		'de-de': "Galar-Flampivian-V"
	},

	attacks: [{
		name: {
			'fr-fr': "Neigeomax",
			'en-us': "Max Whiteout",
			'es-es': "Maxinevada",
			'it-it': "Dynanevicata",
			'pt-br': "Temporal de Neve Max",
			'de-de': "Dyna-Polarsturm"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack also does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque también hace 30 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 200,
		cost: ["Water", "Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 512645,
				tcgplayer: 226420
			}
		},
	],
}

export default card
