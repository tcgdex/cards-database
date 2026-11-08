import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [405],
	set: Set,

	name: {
		'en-us': "Luxray",
		'fr-fr': "Luxray",
		'es-es': "Luxray",
		'it-it': "Luxray",
		'pt-br': "Luxray",
		'de-de': "Luxtra"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio",
		'de-de': "Luxio"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Energy Crush",
			'fr-fr': "Écras'Énergie",
			'es-es': "Comprimir Energía",
			'it-it': "Sgretolenergia",
			'pt-br': "Esmagamento de Energia",
			'de-de': "Zermalmende Energie"
		},

		effect: {
			'en-us': "This attack does 50 damage for each Energy attached to all of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño por cada Energía unida a todos los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 50 danni per ogni Energia assegnata ai Pokémon del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Lightning"],

		name: {
			'en-us': "Flash Impact",
			'fr-fr': "Impact-Flash",
			'es-es': "Impacto Resplandor",
			'it-it': "Impattoflash",
			'pt-br': "Impacto Lampejante",
			'de-de': "Blitzeinschlag"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a 1 de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei tuoi Pokémon in panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf deiner Bank 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Luxray can see through solid objects. It will instantly spot prey trying to hide behind walls, even if the walls are thick.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608501,
				tcgplayer: 263757
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608501,
				tcgplayer: 263757
			}
		},
	],
}

export default card
