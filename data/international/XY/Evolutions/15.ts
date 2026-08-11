import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'es-es': "Ninetales",
		'it-it': "Ninetales",
		'pt-br': "Ninetales",
		'de-de': "Vulnona"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'es-es': "Vulpix",
		'it-it': "Vulpix",
		'pt-br': "Vulpix",
		'de-de': "Vulpix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Lure",
				'fr-fr': "Leurre",
				'es-es': "Cebo",
				'it-it': "Esca",
				'pt-br': "Atrair",
				'de-de': "Lockvogel"
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon. The new Active Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El nuevo Pokémon Activo no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Durante il prossimo turno del tuo avversario, il nuovo Pokémon attivo non può ritirarsi.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente. O novo Pokémon Ativo não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Blast",
				'fr-fr': "Déflagration",
				'es-es': "Llamarada",
				'it-it': "Fuocobomba",
				'pt-br': "Rajada de Fogo",
				'de-de': "Feuersturm"
			},
			effect: {
				'en-us': "Discard a Fire Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie Fire attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía Fire unida a este Pokémon.",
				'it-it': "Scarta un'Energia Fire assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia Fire ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Fire-Energie auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has nine long tails and fur that gleams gold. It is said to live for 1,000 years.",
	},

	thirdParty: {
		cardmarket: 293371,
		tcgplayer: 124028
	}
}

export default card
