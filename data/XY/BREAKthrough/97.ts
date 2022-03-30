import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
		es: "Mr. Mime",
		it: "Mr. Mime",
		pt: "Mr. Mime",
		de: "Pantimos"
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
				en: "Bench Barrier",
				fr: "Barrière de Banc",
				es: "Barrera de Banca",
				it: "Panchinafranca",
				pt: "Barreira de Banco",
				de: "Bankbarriere"
			},
			effect: {
				en: "Prevent all damage done to your Benched Pokémon by attacks.",
				fr: "Évitez tous les dégâts infligés à vos Pokémon de Banc par des attaques.",
				es: "Evita todo el daño infligido a tus Pokémon en Banca por ataques.",
				it: "Previeni tutto il danno inflitto dagli attacchi ai tuoi Pokémon in panchina.",
				pt: "Impede todos os danos causados por ataques a seus Pokémon no Banco.",
				de: "Verhindere allen Schaden, der Pokémon auf deiner Bank durch Angriffe zugefügt wird."
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
				en: "Juggling",
				fr: "Jonglerie",
				es: "Malabarismo",
				it: "Giocoleria",
				pt: "Malabarismo",
				de: "Jongleur"
			},
			effect: {
				en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 4 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				pt: "Jogue 4 moedas. Este ataque causa 10 de danos vezes o número de caras.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
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



}

export default card
