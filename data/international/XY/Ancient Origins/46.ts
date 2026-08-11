import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Malamar",
		'fr-fr': "Sepiatroce",
		'es-es': "Malamar",
		'it-it': "Malamar",
		'pt-br': "Malamar",
		'de-de': "Calamanero"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		687,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Inkay",
		'fr-fr': "Sepiatop",
		'es-es': "Inkay",
		'it-it': "Inkay",
		'pt-br': "Inkay",
		'de-de': "Iscalar"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Entangling Control",
				'fr-fr': "Contrôle Emmêlant",
				'es-es': "Control Estrangulador",
				'it-it': "Invischiacomando",
				'pt-br': "Controle Emaranhador",
				'de-de': "Kontrollschlinge"
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon. The new Active Pokémon is now Confused.",
				'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Confus.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El nuevo Pokémon Activo pasa a estar Confundido.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Il nuovo Pokémon attivo viene confuso.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo deste oponente. O novo Pokémon Ativo agora está confuso.",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Trash Tentacle",
				'fr-fr': "Tentacule Déchet",
				'es-es': "Tentáculo Basura",
				'it-it': "Scartatentacolo",
				'pt-br': "Tentáculo de Lixo",
				'de-de': "Stapeltentakel"
			},
			effect: {
				'en-us': "Put a card from your discard pile into your hand.",
				'fr-fr': "Ajoutez une carte de votre pile de défausse à votre main.",
				'es-es': "Pon 1 carta de tu pila de descartes en tu mano.",
				'it-it': "Prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				'pt-br': "Coloque um card da sua pilha de descarte em sua mão.",
				'de-de': "Nimm 1 Karte von deinem Ablagestapel auf deine Hand."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lures prey close with hypnotic motions, then wraps its tentacles around it before finishing it off with digestive fluids.",
	},

	thirdParty: {
		cardmarket: 284227,
		tcgplayer: 101466
	}
}

export default card
