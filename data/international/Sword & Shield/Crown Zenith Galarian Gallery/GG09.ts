import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [849],
	set: Set,

	name: {
		'en-us': "Toxtricity",
		'fr-fr': "Salarsen",
		'es-es': "Toxtricity",
		'it-it': "Toxtricity",
		'pt-br': "Toxtricity",
		'de-de': "Riffex"
	},

	illustrator: "Nelnal",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Toxel",
		'fr-fr': "Toxizap",
		'es-es': "Toxel",
		'it-it': "Toxel",
		'pt-br': "Toxel",
		'de-de': "Toxel"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Maximum Downer",
			'fr-fr': "Immobilisation Maximale",
			'es-es': "Bajonazo Total",
			'it-it': "Calmante Massimo",
			'pt-br': "Vacilo Total",
			'de-de': "Maximale Spaßbremse"
		},

		effect: {
			'en-us': "If all your Pokémon in play are Fusion Strike Pokémon, your opponent's Pokémon VMAX in play get -30 HP.",
			'fr-fr': "Si tous vos Pokémon en jeu sont des Pokémon Poing de Fusion, les Pokémon-VMAX en jeu de votre adversaire perdent 30 PV.",
			'es-es': "Si todos tus Pokémon en juego son Pokémon Golpe Fusión, los Pokémon VMAX en juego de tu rival tienen 30 PS menos.",
			'it-it': "Se tutti i tuoi Pokémon in gioco sono Pokémon Colpo Fusione, i Pokémon-VMAX in gioco del tuo avversario hanno 30 PS in meno.",
			'pt-br': "Se todos os seus Pokémon em jogo forem Pokémon Golpe Fusão, os Pokémon VMAX do seu oponente em jogo receberão 30 PS a menos.",
			'de-de': "Wenn alle deine Pokémon im Spiel Fusionsangriff-Pokémon sind, erhalten die Pokémon-VMAX deines Gegners im Spiel -30 KP."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Head Bolt",
			'fr-fr': "Éclair Frontal",
			'es-es': "Rayo de Cabeza",
			'it-it': "Zuccalampo",
			'pt-br': "Raio de Cabeça",
			'de-de': "Kopf-Blitz"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",


	description: {
		'en-us': "It has an electrical organ on its chest. While generating electricity, it fills its surroundings with what sounds like the strumming of a bass guitar.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691888,
				tcgplayer: 478026
			}
		},
	],
}

export default card
