import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Zygarde",
		'fr-fr': "Zygarde",
		'es-es': "Zygarde",
		'it-it': "Zygarde",
		'pt-br': "Zygarde",
		'de-de': "Zygarde"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		718,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Lookout",
				'fr-fr': "Surveillance",
				'es-es': "Vigilancia",
				'it-it': "Vedetta",
				'pt-br': "Vigilância",
				'de-de': "Wachsamkeit"
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
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aura Break",
				'fr-fr': "Aura Inversée",
				'es-es': "Rompeaura",
				'it-it': "Frangiaura",
				'pt-br': "Rompimento de Aura",
				'de-de': "Aura-Umkehr"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Darkness or Fairy Pokémon, it can't attack during your opponent's next turn.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon Darkness ou Fairy, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				'es-es': "Si el Pokémon Defensor es un Pokémon Darkness o Fairy, no puede atacar durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Darkness o Fairy.",
				'pt-br': "Se o Pokémon Defensor for um Pokémon Darkness ou Fairy, ele não poderá atacar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wenn das Verteidigende Pokémon ein Darkness- oder Fairy-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It's hypothesized that it's monitoring those who destroy the ecosystem from deep in the cave where it lives.",
	},

	thirdParty: {
		cardmarket: 289873,
		tcgplayer: 117518
	}
}

export default card
