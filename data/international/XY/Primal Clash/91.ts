import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Sharpedo EX",
		'fr-fr': "Sharpedo EX",
		'es-es': "Sharpedo EX",
		'it-it': "Sharpedo EX",
		'pt-br': "Sharpedo EX",
		'de-de': "Tohaido EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		319,
	],

	hp: 170,

	types: [
		"Darkness",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Hunt",
				'fr-fr': "Chasse",
				'es-es': "Caza",
				'it-it': "Agguato",
				'pt-br': "Caçada",
				'de-de': "Jagd"
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon. This attack does 30 damage to the new Active Pokémon.",
				'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Cette attaque inflige 30 dégâts au nouveau Pokémon Actif.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Este ataque hace 30 puntos de daño al nuevo Pokémon Activo.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Questo attacco infligge 30 danni al nuovo Pokémon attivo.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente. Este ataque causa 30 de danos ao novo Pokémon Ativo.",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Dieser Angriff fügt dem neuen Aktiven Pokémon 30 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Jagged Fang",
				'fr-fr': "Croc Acéré",
				'es-es': "Colmillo Mellado",
				'it-it': "Fauci Taglienti",
				'pt-br': "Presa Lascada",
				'de-de': "Schneidezahn"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon. Then, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon. Ensuite, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía unida a este Pokémon. Después, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon. Poi, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon. Em seguida, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel. Lege anschließend 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	stage: "Basic",

	thirdParty: {
		cardmarket: 273622,
		tcgplayer: 95989
	}
}

export default card
