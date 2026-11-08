import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Tornadus",
		'fr-fr': "Boréas",
		'es-es': "Tornadus",
		'it-it': "Tornadus",
		'pt-br': "Tornadus",
		'de-de': "Boreos"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		641,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Knuckle Punch",
				'fr-fr': "Coud’Phalange",
				'es-es': "Puño con Nudillos",
				'it-it': "Noccapugno",
				'pt-br': "Soco com Punho",
				'de-de': "Knöchelhieb"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thunderous Tornado",
				'fr-fr': "Tornade Fulgurante",
				'es-es': "Tornado Atronador",
				'it-it': "Tornado Tonante",
				'pt-br': "Tornado Trovejante",
				'de-de': "Donnernder Tornado"
			},
			effect: {
				'en-us': "If Thundurus is on your Bench, this attack does 20 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Si Fulguris est sur votre Banc, cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Si Thundurus está en tu Banca, este ataque hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Se Thundurus è nella tua panchina, questo attacco infligge 20 danni a ciascun Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Se Thundurus estiver no seu Banco, este ataque causará 20 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Wenn sich Voltolos auf deiner Bank befindet, fügt diese Attacke jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The lower half of its body is wrapped in a cloud of energy. It zooms through the sky at 200 mph.",
	},

	thirdParty: {
		cardmarket: 388677,
		tcgplayer: 195180
	}
}

export default card
