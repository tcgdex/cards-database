import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Mr. Mime",
		'fr-fr': "M. Mime",
		'es-es': "Mr. Mime",
		'it-it': "Mr. Mime",
		'pt-br': "Mr. Mime",
		'de-de': "Pantimos"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Bench Barrier",
				'fr-fr': "Barrière de Banc",
				'es-es': "Barrera de Banca",
				'it-it': "Panchinafranca",
				'pt-br': "Barreira de Banco",
				'de-de': "Bankbarriere"
			},
			effect: {
				'en-us': "Prevent all damage done to your Benched Pokémon by attacks.",
				'fr-fr': "Évitez tous les dégâts infligés à vos Pokémon de Banc par des attaques.",
				'es-es': "Evita todo el daño infligido a tus Pokémon en Banca por ataques.",
				'it-it': "Previeni tutto il danno inflitto dagli attacchi ai tuoi Pokémon in panchina.",
				'pt-br': "Impede todos os danos causados por ataques a seus Pokémon no Banco.",
				'de-de': "Verhindere allen Schaden, der Pokémon auf deiner Bank durch Angriffe zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Juggling",
				'fr-fr': "Jonglerie",
				'es-es': "Malabarismo",
				'it-it': "Giocoleria",
				'pt-br': "Malabarismo",
				'de-de': "Jongleur"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 4 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				'pt-br': "Jogue 4 moedas. Este ataque causa 10 de danos vezes o número de caras.",
				'de-de': "Wirf 4 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is adept at conning people. It is said to be able to create walls out of thin air by miming.",
	},

	thirdParty: {
		cardmarket: 286343,
		tcgplayer: 107216
	}
}

export default card
