import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Gorebyss",
		'fr-fr': "Rosabyss",
		'es-es': "Gorebyss",
		'it-it': "Gorebyss",
		'pt-br': "Gorebyss",
		'de-de': "Saganabyss"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		368,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Clamperl",
		'fr-fr': "Coquiperl",
		'es-es': "Clamperl",
		'it-it': "Clamperl",
		'pt-br': "Clamperl",
		'de-de': "Perlu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Captivate",
				'fr-fr': "Séduction",
				'es-es': "Seducción",
				'it-it': "Incanto",
				'pt-br': "Cativar",
				'de-de': "Liebreiz"
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
				'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente.",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen das Aktive Pokémon deines Gegners aus."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Psychic",
				'fr-fr': "Psyko",
				'es-es': "Psíquico",
				'it-it': "Psichico",
				'pt-br': "Psíquico",
				'de-de': "Psychokinese"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Esse ataque causa 10 de danos adicionais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Its swimming form is exquisitely elegant. With its thin mouth, it feeds on seaweed that grows between rocks.",
	},

	thirdParty: {
		cardmarket: 273582,
		tcgplayer: 95949
	}
}

export default card
