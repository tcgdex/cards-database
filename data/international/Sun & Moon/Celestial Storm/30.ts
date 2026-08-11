import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Oricorio",
		'fr-fr': "Plumeline",
		'es-es': "Oricorio",
		'it-it': "Oricorio",
		'pt-br': "Oricorio",
		'de-de': "Choreogel"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		741,
	],

	hp: 90,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Captivating Salsa",
				'fr-fr': "Salsa Envoûtante",
				'es-es': "Salsa Cautivadora",
				'it-it': "Flamenco Incantato",
				'pt-br': "Salsa Cativante",
				'de-de': "Hinreißende Salsa"
			},
			effect: {
				'en-us': "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Burned and Confused.",
				'fr-fr': "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Brûlé et Confus.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El nuevo Pokémon Activo pasa a estar Confundido y Quemado.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Il nuovo Pokémon attivo viene bruciato e confuso.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). O novo Pokémon Ativo agora está Confuso e Queimado.",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon ist jetzt verbrannt und verwirrt."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Blast",
				'fr-fr': "Explosion de Chaleur",
				'es-es': "Explosión de Calor",
				'it-it': "Caldobomba",
				'pt-br': "Raio de Calor",
				'de-de': "Hitzestoß"
			},

			damage: 70,

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
		'en-us': "This Oricorio has sipped red nectar. Its passionate dance moves cause its enemies to combust in both body and mind.",
	},

	thirdParty: {
		cardmarket: 361277,
		tcgplayer: 170845
	}
}

export default card
