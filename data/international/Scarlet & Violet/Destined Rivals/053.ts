import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [350],
	set: Set,

	name: {
		'en-us': "Cynthia's Milotic",
		'fr-fr': "Milobellus de Cynthia",
		'de-de': "Cynthias Milotic",
		'it-it': "Milotic di Camilla",
		'es-es': "Milotic de Cintia",
		'pt-br': "Milotic da Cíntia",
		'es-mx': "Milotic de Cynthia"
	},

	illustrator: "You Iribi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Cynthia's Feebas",
		'fr-fr': "Barpau de Cynthia",
		'de-de': "Cynthias Barschwa",
		'it-it': "Feebas di Camilla",
		'es-es': "Feebas de Cintia",
		'pt-br': "Feebas da Cíntia",
		'es-mx': "Feebas de Cynthia"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Aqua Split",
			'fr-fr': "Scission Aqua",
			'de-de': "Wasserteiler",
			'it-it': "Spartiacque",
			'es-es': "Isoaqua",
			'pt-br': "Divisão Aquática",
			'es-mx': "Acuapartición"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt auch 2 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge anche 30 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'es-es': "Este ataque también hace 30 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque também causa 30 pontos de dano a 2 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque también hace 30 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825927,
				tcgplayer: 632866
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825927,
				tcgplayer: 632866
			}
		},
	],
}

export default card
