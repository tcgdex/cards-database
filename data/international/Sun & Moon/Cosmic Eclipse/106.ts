import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Nosepass",
		'fr-fr': "Tarinor",
		'es-es': "Nosepass",
		'it-it': "Nosepass",
		'pt-br': "Nosepass",
		'de-de': "Nasgnet"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		299,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Draw Toward",
				'fr-fr': "Attirance",
				'es-es': "Acercamiento",
				'it-it': "Attrazione Mirata",
				'pt-br': "Chega Mais",
				'de-de': "Anziehen"
			},
			effect: {
				'en-us': "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
				'fr-fr': "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Zap Cannon",
				'fr-fr': "Élecanon",
				'es-es': "Electrocañón",
				'it-it': "Falcecannone",
				'pt-br': "Canhão Zap",
				'de-de': "Blitzkanone"
			},
			effect: {
				'en-us': "This Pokémon can’t use Zap Cannon during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Élecanon pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Electrocañón durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Falcecannone.",
				'pt-br': "Este Pokémon não poderá usar Canhão Zap durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Blitzkanone während deines nächsten Zuges nicht einsetzen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It moves less than an inch a year, but when it's in a jam, it will spin and drill down into the ground in a split second.",
	},

	thirdParty: {
		cardmarket: 408174,
		tcgplayer: 201135
	}
}

export default card
