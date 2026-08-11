import { Card } from "models/database/card"
import Set from "../Fusion Strike"

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

	rarity: "Holo Rare",
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
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "nagimiso",

	description: {
		'en-us': "It has an electrical organ on its chest. While generating electricity, it fills its surroundings with what sounds like the strumming of a bass guitar."
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Maximum Downer",
			'fr-fr': "Immobilisation Maximale",
			'de-de': "Maximale Spaßbremse",
			'es-es': "Bajonazo Total",
			'pt-br': "Vacilo Total",
			'it-it': "Calmante Massimo"
		},

		effect: {
			'en-us': "If all your Pokémon in play are Fusion Strike Pokémon, your opponent's Pokémon VMAX in play get -30 HP.",
			'fr-fr': "Si tous vos Pokémon en jeu sont des Pokémon Poing de Fusion, les Pokémon-VMAX en jeu de votre adversaire perdent 30 PV.",
			'de-de': "Wenn alle deine Pokémon im Spiel Fusionsangriff-Pokémon sind, erhalten die Pokémon-VMAX deines Gegners im Spiel -30 KP.",
			'es-es': "Si todos tus Pokémon en juego son Pokémon Golpe Fusión, los Pokémon VMAX en juego de tu rival tienen 30 PS menos.",
			'pt-br': "Se todos os seus Pokémon em jogo forem Pokémon Golpe Fusão, os Pokémon VMAX do seu oponente em jogo receberão 30 PS a menos.",
			'it-it': "Se tutti i tuoi Pokémon in gioco sono Pokémon Colpo Fusione, i Pokémon-VMAX in gioco del tuo avversario hanno 30 PS in meno."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Head Bolt",
			'fr-fr': "Éclair Frontal",
			'de-de': "Kopf-Blitz",
			'es-es': "Rayo de Cabeza",
			'pt-br': "Raio de Cabeça",
			'it-it': "Zuccalampo"
		},

		damage: 90
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582501,
				tcgplayer: 253264
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582501,
				tcgplayer: 253264
			}
		},
	],
}

export default card
