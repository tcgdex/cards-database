import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Politoed",
		'fr-fr': "Tarpaud",
		'es-es': "Politoed",
		'it-it': "Politoed",
		'pt-br': "Politoed",
		'de-de': "Quaxo"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		186,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte",
		'es-es': "Poliwhirl",
		'it-it': "Poliwhirl",
		'pt-br': "Poliwhirl",
		'de-de': "Quaputzi"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "King's Song",
				'fr-fr': "Chant du Roi",
				'es-es': "Canto Real",
				'it-it': "Canto Reale",
				'pt-br': "Canção do Rei",
				'de-de': "Königliche Klänge"
			},
			effect: {
				'en-us': "Ignore all Colorless Energy in the attack cost of each of your Poliwag, Poliwhirl, and Poliwrath's attacks.",
				'fr-fr': "Ignorez toutes les Énergies Colorless dans les coûts d'attaque des attaques de vos Ptitard, Têtarte et Tartard.",
				'es-es': "Ignora todas las Energías Colorless en el coste de los ataques de tus Poliwag, Poliwhirl y Poliwrath.",
				'it-it': "Ignora tutte le Energie Colorless necessarie per usare gli attacchi dei tuoi Poliwag, Poliwhirl e Poliwrath.",
				'pt-br': "Ignore toda a Energia Colorless no custo do ataque para cada um dos ataques de seus Poliwag, Poliwhirl e Poliwrath.",
				'de-de': "Ignoriere alle Colorless-Energien in den Angriffskosten der Attacken deiner Quapsel, Quaputzi und Quappo."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Voice",
				'fr-fr': "Mégaphone",
				'es-es': "Vozarrón",
				'it-it': "Granvoce",
				'pt-br': "Hipervoz",
				'de-de': "Schallwelle"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Whenever three or more of these get together, they sing in a loud voice that sounds like bellowing.",
	},

	thirdParty: {
		cardmarket: 281682,
		tcgplayer: 92193
	}
}

export default card
