import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Sandygast",
		fr: "Bacabouh",
		es: "Sandygast",
		it: "Sandygast",
		pt: "Sandygast",
		de: "Sankabuh"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		769,
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
			],
			name: {
				en: "Shore Up",
				fr: "Amass’Sable",
				es: "Recogearena",
				it: "Sabbiaccumulo",
				pt: "Suporte",
				de: "Sandsammler"
			},
			effect: {
				en: "Attach a Fighting Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie Fighting de votre pile de défausse à ce Pokémon.",
				es: "Une 1 carta de Energía Fighting de tu pila de descartes a este Pokémon.",
				it: "Assegna a questo Pokémon una carta Energia Fighting dalla tua pila degli scarti.",
				pt: "Ligue 1 carta de Energia Fighting da sua pilha de descarte a este Pokémon.",
				de: "Lege 1 Fighting-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sand Tomb",
				fr: "Tourbi-Sable",
				es: "Bucle Arena",
				it: "Sabbiotomba",
				pt: "Fosso de Areia",
				de: "Sandgrab"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 295385,
		tcgplayer: 126946
	}
}

export default card
