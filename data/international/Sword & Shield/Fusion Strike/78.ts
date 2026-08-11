import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [818],
	set: Set,

	name: {
		'en-us': "Inteleon V",
		'fr-fr': "Lézargus V",
		'es-es': "Inteleon V",
		'it-it': "Inteleon V",
		'pt-br': "Inteleon V",
		'de-de': "Intelleon V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'de-de': "Surfer",
			'es-es': "Surf",
			'pt-br': "Surfar",
			'it-it': "Surf"
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Aqua Bullet",
			'fr-fr': "Aquaballe",
			'de-de': "Aquageschoss",
			'es-es': "Bala Agua",
			'pt-br': "Projétil de Água",
			'it-it': "Idrodardo"
		},

		damage: 120,

		effect: {
			'en-us': "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582212,
				tcgplayer: 253232
			}
		},
	],
}

export default card
