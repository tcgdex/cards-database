import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [239],
	set: Set,

	name: {
		'en-us': "Elekid",
		'fr-fr': "Élekid",
		'es-es': "Elekid",
		'it-it': "Elekid",
		'pt-br': "Elekid",
		'de-de': "Elekid"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Crackling Shot",
			'fr-fr': "Tir Crépitant",
			'es-es': "Disparo Chispeante",
			'it-it': "Colpo Crepitante",
			'pt-br': "Disparo Estalante",
			'de-de': "Knisternder Schuss"
		},

		effect: {
			'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 30 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	description: {
		'en-us': "It's not good at storing electricity yet. This Pokémon sneaks into people's homes, looking for electrical outlets to eat electricity from.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740550,
				tcgplayer: 523671,
				cardtrader: 265126
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740550,
				tcgplayer: 523671,
				cardtrader: 265126
			}
		},
	],

	illustrator: "aoki",

	
}

export default card
