import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Piplup",
		fr: "Tiplouf",
		es: "Piplup",
		it: "Piplup",
		pt: "Piplup",
		de: "Plinfa"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		393,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Bubble Hold",
				fr: "Bulles Bloquantes",
				es: "Bloqueo Burbuja",
				it: "Gabbia di Bolle",
				pt: "Prisão de Bolhas",
				de: "Blasengriff"
			},
			effect: {
				en: "If the Defending Pokémon is a Basic Pokémon, it can’t attack during your opponent’s next turn.",
				fr: "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				es: "Si el Pokémon Defensor es un Pokémon Básico, no puede atacar durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Base.",
				pt: "Se o Pokémon Defensor for um Pokémon Básico, ele não poderá atacar durante a próxima vez de jogar do seu oponente.",
				de: "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
