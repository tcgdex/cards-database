import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [248],
	set: Set,

	name: {
		'en-us': "Tyranitar",
		'fr-fr': "Tyranocif",
		'es-es': "Tyranitar",
		'it-it': "Tyranitar",
		'pt-br': "Tyranitar",
		'de-de': "Despotar"
	},

	illustrator: "Nisota Niso",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
		'es-es': "Pupitar",
		'it-it': "Pupitar",
		'pt-br': "Pupitar",
		'de-de': "Pupitar"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Raging Crash",
			'fr-fr': "Collision Acharnée",
			'es-es': "Choque Furioso",
			'it-it': "Furia Distruttiva",
			'pt-br': "Colisão Feroz",
			'de-de': "Tobender Hagel"
		},

		effect: {
			'en-us': "This attack does 10 damage for each damage counter on all of your Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts placé sur tous vos Pokémon de Banc.",
			'es-es': "Este ataque hace 10 puntos de daño por cada contador de daño en todos tus Pokémon en Banca.",
			'it-it': "Questo attacco infligge 10 danni per ogni segnalino danno presente sui tuoi Pokémon in panchina.",
			'pt-br': "Este ataque causa 10 pontos de dano para cada contador de dano em todos os seus Pokémon no Banco.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf allen Pokémon auf deiner Bank 10 Schadenspunkte zu."
		},

		damage: "10×"
	}, {
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Earthquake",
			'fr-fr': "Séisme",
			'es-es': "Terremoto",
			'it-it': "Terremoto",
			'pt-br': "Terremoto",
			'de-de': "Erdbeben"
		},

		effect: {
			'en-us': "This attack also does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 20 pontos de dano a cada um dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "Its body can't be harmed by any sort of attack, so it is very eager to make challenges against enemies.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665673,
				tcgplayer: 277007
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665673,
				tcgplayer: 277007
			}
		},
	],
}

export default card
