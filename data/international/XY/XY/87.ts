import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
		'es-es': "Jigglypuff",
		'it-it': "Jigglypuff",
		'pt-br': "Jigglypuff",
		'de-de': "Pummeluff"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		39,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'es-es': "Desenrollar",
				'it-it': "Rotolamento",
				'pt-br': "Rolagem",
				'de-de': "Walzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Heartfelt Song",
				'fr-fr': "Chanson du Cœur",
				'es-es': "Canto Sincero",
				'it-it': "Cantosincero",
				'pt-br': "Canção Sincera",
				'de-de': "Melodie des Herzens"
			},
			effect: {
				'en-us': "Discard a Darkness Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Défaussez une Énergie Darkness attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía Darkness unida al Pokémon Activo de tu rival.",
				'it-it': "Scarta un'Energia Darkness assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte uma Energia Darkness ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 an das Aktive Pokémon deines Gegners angelegte Darkness-Energie auf den Ablagestapel deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It captivates foes with its huge, round eyes, then lulls them to sleep by singing a soothing melody.",
	},

	thirdParty: {
		cardmarket: 281424,
		tcgplayer: 86322
	}
}

export default card
