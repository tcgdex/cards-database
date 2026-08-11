import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [1001],
	set: Set,

	name: {
		'en-us': "Wo-Chien ex",
		'fr-fr': "Chongjian-ex",
		'es-es': "Wo-Chien ex",
		'it-it': "Wo-Chien-ex",
		'de-de': "Chongjian-ex",
		'pt-br': "Wo-Chien ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 230,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Covetous Ivy",
			'fr-fr': "Liane Envieuse",
			'es-es': "Hiedra Codiciosa",
			'it-it': "Edera Bramosa",
			'de-de': "Gieriger Efeu",
			'pt-br': "Hera da Cobiça"
		},

		effect: {
			'en-us': "This attack does 60 damage to 1 of your opponent's Benched Pokémon for each Prize card your opponent has taken. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 60 dégâts à l'un des Pokémon de Banc de votre adversaire pour chaque carte Récompense que votre adversaire a récupérée. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 60 puntos de daño a uno de los Pokémon en Banca de tu rival por cada carta de Premio que haya cogido tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 60 danni a uno dei Pokémon nella panchina del tuo avversario per ogni carta Premio che ha preso. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 60 Schadenspunkte für jede von deinem Gegner genommene Preiskarte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'pt-br': "Este ataque causa 60 pontos de dano a 1 dos Pokémon no Banco do seu oponente para cada carta de Prêmio que ele pegou. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}, {
		cost: ["Grass", "Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Forest Blast",
			'fr-fr': "Explosion Sylvestre",
			'es-es': "Explosión Forestal",
			'it-it': "Esplosione Forestale",
			'de-de': "Waldexplosion",
			'pt-br': "Explosão Florestal"
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751787,
				tcgplayer: 535112,
				cardtrader: 274424
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card
