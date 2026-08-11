import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Wailord",
		'fr-fr': "Wailord",
		'es-es': "Wailord",
		'it-it': "Wailord",
		'pt-br': "Wailord",
		'de-de': "Wailord"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		321,
	],

	hp: 220,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Dwindling Wave",
				'fr-fr': "Vague Faiblissante",
				'es-es': "Ola Menguante",
				'it-it': "Onda Evanescente",
				'pt-br': "Onda Decrescente",
				'de-de': "Schwindende Welle"
			},
			effect: {
				'en-us': "This attack does 40 less damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 40 dégâts de moins pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 40 puntos de daño menos por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 40 danni in meno per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 40 pontos de dano a menos para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt 40 Schadenspunkte weniger mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "200-",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Its immense size is the reason for its popularity. Wailord watching is a favorite sightseeing activity in various parts of the world.",
	},

	thirdParty: {
		cardmarket: 361287,
		tcgplayer: 170857
	}
}

export default card
