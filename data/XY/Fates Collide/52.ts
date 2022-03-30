import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Zygarde",
		fr: "Zygarde",
		es: "Zygarde",
		it: "Zygarde",
		pt: "Zygarde",
		de: "Zygarde"
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
				en: "Lookout",
				fr: "Surveillance",
				es: "Vigilancia",
				it: "Vedetta",
				pt: "Vigilância",
				de: "Wachsamkeit"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
				fr: "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente.",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen das Aktive Pokémon deines Gegners aus."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aura Break",
				fr: "Aura Inversée",
				es: "Rompeaura",
				it: "Frangiaura",
				pt: "Rompimento de Aura",
				de: "Aura-Umkehr"
			},
			effect: {
				en: "If the Defending Pokémon is a Darkness or Fairy Pokémon, it can't attack during your opponent's next turn.",
				fr: "Si le Pokémon Défenseur est un Pokémon Darkness ou Fairy, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				es: "Si el Pokémon Defensor es un Pokémon Darkness o Fairy, no puede atacar durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Darkness o Fairy.",
				pt: "Se o Pokémon Defensor for um Pokémon Darkness ou Fairy, ele não poderá atacar durante a próxima vez de jogar do seu oponente.",
				de: "Wenn das Verteidigende Pokémon ein Darkness- oder Fairy-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
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



}

export default card
