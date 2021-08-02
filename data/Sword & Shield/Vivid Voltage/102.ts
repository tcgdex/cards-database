import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zamazenta",
		fr: "Zamazenta",
		es: "Zamazenta",
		it: "Zamazenta",
		pt: "Zamazenta",
		de: "Zamazenta"
	},

	illustrator: "aky CG Works",
	rarity: "Amazing",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Metal Armament",
				fr: "Artillerie Métallique",
				es: "Armamento Metálico",
				it: "Dotazione Metallica",
				pt: "Armamento de Metal",
				de: "Metallrüstung"
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
				es: "Une 1 carta de Energía Básica de tu pila de descartes a este Pokémon.",
				it: "Assegna a questo Pokémon una carta Energia base dalla tua pila degli scarti.",
				pt: "Ligue 1 carta de Energia básica da sua pilha de descarte a este Pokémon.",
				de: "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Fighting",
				"Metal",
			],
			name: {
				en: "Amazing Shield",
				fr: "Bouclier Magnifique",
				es: "Escudo Increíble",
				it: "Scudo Policromo",
				pt: "Escudo Incrível",
				de: "Atemberaubender Schild"
			},
			effect: {
				en: "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks from Pokémon VMAX.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-VMAX.",
				es: "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon VMAX.",
				it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-VMAX.",
				pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon VMAX.",
				de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Pokémon-VMAX zugefügt wird."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
