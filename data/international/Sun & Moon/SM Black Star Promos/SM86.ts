import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},
	illustrator: "kodama",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		25,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Whap",
				'fr-fr': "Queue Battoir",
				'es-es': "Coletón",
				'it-it': "Codabotta",
				'pt-br': "Surra de Cauda",
				'de-de': "Schweifvertrimmer"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Spark",
				'fr-fr': "Étincelle",
				'es-es': "Chispa",
				'it-it': "Scintilla",
				'pt-br': "Faísca",
				'de-de': "Funkensprung"
			},
			effect: {
				'en-us': "This attack does 10 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 10 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 10 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Esse ataque causa 10 de danos a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "A plan was recently announced to gather many Pikachu and make an electric power plant.",
	},
}

export default card
