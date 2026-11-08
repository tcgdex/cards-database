import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [894],
	set: Set,

	name: {
		'en-us': "Regieleki",
		'fr-fr': "Regieleki",
		'es-es': "Regieleki",
		'it-it': "Regieleki",
		'pt-br': "Regieleki",
		'de-de': "Regieleki"
	},

	illustrator: "Shiburingaru",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Electromagnetic Sonar",
			'fr-fr': "Sonar Électromagnétique",
			'es-es': "Sonar Electromagnético",
			'it-it': "Sonar Elettromagnetico",
			'pt-br': "Sonar Eletromagnético",
			'de-de': "Elektromagnetisches Sonar"
		},

		effect: {
			'en-us': "Put a Trainer card from your discard pile into your hand.",
			'fr-fr': "Ajoutez à votre main une carte Dresseur de votre pile de défausse.",
			'es-es': "Pon 1 carta de Entrenador de tu pila de descartes en tu mano.",
			'it-it': "Prendi una carta Allenatore dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			'pt-br': "Coloque 1 carta de Treinador da sua pilha de descarte na sua mão.",
			'de-de': "Nimm 1 Trainerkarte aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Targeted Bolt",
			'fr-fr': "Foudre Ciblée",
			'es-es': "Rayo Focalizado",
			'it-it': "Lampo Mirato",
			'pt-br': "Raio na Mira",
			'de-de': "Gezielter Blitz"
		},

		effect: {
			'en-us': "Discard 2 Lightning Energy from this Pokémon. This attack does 120 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez 2 Énergies Lightning de ce Pokémon. Cette attaque inflige 120 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Descarta 2 Energías Lightning de este Pokémon. Este ataque hace 120 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Scarta due Energie Lightning da questo Pokémon. Questo attacco infligge 120 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Descarte 2 Energias Lightning deste Pokémon. Este ataque causa 120 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Lege 2 Lightning-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon is a cluster of electrical energy. It's said that removing the rings on Regieleki's body will unleash the Pokémon's latent power.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658600,
				tcgplayer: 272252
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658600,
				tcgplayer: 272252
			}
		},
	],
}

export default card
