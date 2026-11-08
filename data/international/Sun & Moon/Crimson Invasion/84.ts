import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Regigigas",
		'fr-fr': "Regigigas",
		'es-es': "Regigigas",
		'it-it': "Regigigas",
		'pt-br': "Regigigas",
		'de-de': "Regigigas"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		486,
	],

	hp: 180,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Seal of Antiquity",
				'fr-fr': "Sceau d’Antiquité",
				'es-es': "Sello de Antigüedad",
				'it-it': "Sigillo dell’Antichità",
				'pt-br': "Selo de Antiguidade",
				'de-de': "Siegel des Altertums"
			},
			effect: {
				'en-us': "This Pokémon can’t attack unless Regirock, Regice, and Registeel are on your Bench.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer, à moins que Regirock, Regice et Registeel ne soient sur votre Banc.",
				'es-es': "Este Pokémon no puede atacar a menos que Regirock, Regice y Registeel estén en tu Banca.",
				'it-it': "Questo Pokémon non può attaccare a meno che Regirock, Regice e Registeel non siano nella tua panchina.",
				'pt-br': "Este Pokémon não pode atacar a não ser que Regirock, Regice e Registeel estejam no seu Banco.",
				'de-de': "Dieses Pokémon kann nicht angreifen, es sei denn, Regirock, Regice und Registeel befinden sich auf deiner Bank."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giant Stomp",
				'fr-fr': "Piétinement Gigantesque",
				'es-es': "Pisotón Gigante",
				'it-it': "Pestata Gigante",
				'pt-br': "Pisada Gigante",
				'de-de': "Gigantischer Stampfer"
			},
			effect: {
				'en-us': "Discard any Stadium card in play.",
				'fr-fr': "Défaussez toute carte Stade en jeu.",
				'es-es': "Descarta cualquier carta de Estadio en juego.",
				'it-it': "Scarta una carta Stadio in gioco.",
				'pt-br': "Descarte qualquer carta de Estádio em jogo.",
				'de-de': "Lege 1 beliebige Stadionkarte im Spiel auf den Ablagestapel."
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It is said to have made Pokémon that look like itself from a special ice mountain, rocks, and magma.",
	},

	thirdParty: {
		cardmarket: 311931,
		tcgplayer: 149109
	}
}

export default card
