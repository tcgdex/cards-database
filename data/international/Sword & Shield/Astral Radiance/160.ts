import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [15],
	set: Set,

	name: {
		'en-us': "Beedrill V",
		'fr-fr': "Dardargnan V",
		'es-es': "Beedrill V",
		'it-it': "Beedrill V",
		'pt-br': "Beedrill V",
		'de-de': "Bibor V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Twineedle",
			'fr-fr': "Double Dard",
			'es-es': "Doble Ataque",
			'it-it': "Doppio Ago",
			'pt-br': "Agulha Dupla",
			'de-de': "Duonadel"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 40 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
		},

		damage: "40×"
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Swarming Sting",
			'fr-fr': "Essaim Piqûre",
			'es-es': "Picotazo Enjambre",
			'it-it': "Sciamespina",
			'pt-br': "Enxame de Ferrão",
			'de-de': "Stachelschwarm"
		},

		effect: {
			'en-us': "This attack does 50 damage to 1 of your opponent's Pokémon for each of your Beedrill V in play. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire pour chacun de vos Dardargnan-V en jeu. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival por cada uno de tus Beedrill V en juego. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario per ogni tuo Beedrill-V in gioco. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente para cada um dos seus Beedrill V em jogo (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt für jedes deiner Bibor-V im Spiel 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658821,
				tcgplayer: 272412
			}
		},
	],
}

export default card
