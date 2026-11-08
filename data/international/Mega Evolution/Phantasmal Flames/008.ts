import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Genesect",
		'fr-fr': "Genesect",
		'es-es': "Genesect",
		'es-mx': "Genesect",
		'de-de': "Genesect",
		'it-it': "Genesect",
		'pt-br': "Genesect"
	},

	rarity: "Rare",
	category: "Pokemon",

	dexId: [649],
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Bug's Cannon",
			'fr-fr': "Canon d'Insecte",
			'es-es': "Cañón de Bichos",
			'es-mx': "Insecticañón",
			'de-de': "Käferkanone",
			'it-it': "Coleocannone",
			'pt-br': "Canhão do Inseto"
		},

		effect: {
			'en-us': "This attack does 20 damage to 1 of your opponent's Pokémon for each {G} Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie {G} attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 20 puntos de daño a uno de los Pokémon de tu rival por cada Energía {G} unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival por cada Energía {G} unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners für jede an dieses Pokémon angelegte {G}-Energie 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario per ogni Energia {G} assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia {G} ligada a este Pokémon. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Speed Attack",
			'fr-fr': "Attaque Rapide",
			'es-es': "Ataque Fugaz",
			'es-mx': "Ataque Veloz",
			'de-de': "Tempoangriff",
			'it-it': "Attacco Veloce",
			'pt-br': "Ataque em Velocidade"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "This Pokémon existed 300 million years ago. Team Plasma altered it and attached a cannon to its back.",
	},

	illustrator: "Mitsuhiro Arita",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857583,
				tcgplayer: 662161,
				cardtrader: 356792
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857583,
				tcgplayer: 662161,
				cardtrader: 356792
			}
		},
		{
			type: 'holo',
			stamp: ['set-logo'],
			thirdParty: {
				cardmarket: 858502
			}
		},
	],
}

export default card
