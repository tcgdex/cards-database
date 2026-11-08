import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Jumpluff",
		'fr-fr': "Cotovol",
		'es-es': "Jumpluff",
		'it-it': "Jumpluff",
		'pt-br': "Jumpluff",
		'de-de': "Papungha"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		189,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol",
		'es-es': "Skiploom",
		'it-it': "Skiploom",
		'pt-br': "Skiploom",
		'de-de': "Hubelupf"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fluffy Transport",
				'fr-fr': "Transport Coton",
				'es-es': "Transporte Sedoso",
				'it-it': "Trasporto Bambagia",
				'pt-br': "Transporte Macio",
				'de-de': "Flauschiger Transport"
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
				"Grass",
			],
			name: {
				'en-us': "Solar Step",
				'fr-fr': "Démarche Solaire",
				'es-es': "Paso Solar",
				'it-it': "Solarpasso",
				'pt-br': "Passo Solar",
				'de-de': "Solarschritt"
			},
			effect: {
				'en-us': "This attack does 20 damage times the number of your remaining Prize cards.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre de vos cartes Récompense.",
				'es-es': "Este ataque hace 20 puntos de daño por cada carta de Premio que te quede.",
				'it-it': "Questo attacco infligge 20 danni per ogni carta Premio che ti resta.",
				'pt-br': "Este ataque causa 20 de danos vezes o número de seus cards de Prêmio restantes.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl deiner noch übrigen Preiskarten zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Even in the fiercest wind, it can control its fluff to make its way to any place in the world it wants.",
	},

	thirdParty: {
		cardmarket: 291512,
		tcgplayer: 120994
	}
}

export default card
