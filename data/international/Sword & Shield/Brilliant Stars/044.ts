import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [875],
	set: Set,

	name: {
		'en-us': "Eiscue",
		'fr-fr': "Bekaglaçon",
		'es-es': "Eiscue",
		'it-it': "Eiscue",
		'pt-br': "Eiscue",
		'de-de': "Kubuin"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Block Slider",
			'fr-fr': "Pousse Cube",
			'es-es': "Bloque Deslizante",
			'it-it': "Blocco Scivoloso",
			'pt-br': "Bloco Deslizante",
			'de-de': "Blockgleiter"
		},

		effect: {
			'en-us': "This attack does 40 damage to 1 of your opponent's Pokémon for each Fusion Strike Energy attached to all of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 40 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie Poing de Fusion attachée à tous vos Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 40 puntos de daño a 1 de los Pokémon de tu rival por cada Energía Golpe Fusión unida a todos tus Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 40 danni a uno dei Pokémon del tuo avversario per ogni Energia Colpo Fusione assegnata ai tuoi Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 40 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia Golpe Fusão ligada a todos os seus Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners für jede an alle deine Pokémon angelegte Fusionsangriff-Energie 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Icicle Missile",
			'fr-fr': "Missile Stalactite",
			'es-es': "Misil Carámbano",
			'it-it': "Missilghiaccio",
			'pt-br': "Míssil Gélido",
			'de-de': "Eiszapfenrakete"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",


	description: {
		'en-us': "The hair on its head connects to the surface of its brain. When this Pokémon has something on its mind, its hair chills the air around it.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608494,
				tcgplayer: 263745
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608494,
				tcgplayer: 263745
			}
		},
	],
}

export default card
