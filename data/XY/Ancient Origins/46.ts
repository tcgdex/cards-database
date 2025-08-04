import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Malamar",
		fr: "Sepiatroce",
		es: "Malamar",
		it: "Malamar",
		pt: "Malamar",
		de: "Calamanero"
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
		en: "Inkay",
		fr: "Sepiatop",
		es: "Inkay",
		it: "Inkay",
		pt: "Inkay",
		de: "Iscalar"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Entangling Control",
				fr: "Contrôle Emmêlant",
				es: "Control Estrangulador",
				it: "Invischiacomando",
				pt: "Controle Emaranhador",
				de: "Kontrollschlinge"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon. The new Active Pokémon is now Confused.",
				fr: "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Confus.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El nuevo Pokémon Activo pasa a estar Confundido.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Il nuovo Pokémon attivo viene confuso.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo deste oponente. O novo Pokémon Ativo agora está confuso.",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Trash Tentacle",
				fr: "Tentacule Déchet",
				es: "Tentáculo Basura",
				it: "Scartatentacolo",
				pt: "Tentáculo de Lixo",
				de: "Stapeltentakel"
			},
			effect: {
				en: "Put a card from your discard pile into your hand.",
				fr: "Ajoutez une carte de votre pile de défausse à votre main.",
				es: "Pon 1 carta de tu pila de descartes en tu mano.",
				it: "Prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				pt: "Coloque um card da sua pilha de descarte em sua mão.",
				de: "Nimm 1 Karte von deinem Ablagestapel auf deine Hand."
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

	thirdParty: {
		cardmarket: 284227,
		tcgplayer: 101466
	}
}

export default card
