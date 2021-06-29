import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zacian",
		fr: "Zacian",
		es: "Zacian",
		it: "Zacian",
		pt: "Zacian",
		de: "Zacian"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Amazing",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Psychic",
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
				"Grass",
				"Psychic",
				"Metal",
			],
			name: {
				en: "Amazing Sword",
				fr: "Épée Magnifique",
				es: "Espada Increíble",
				it: "Spada Policroma",
				pt: "Espada Incrível",
				de: "Atemberaubendes Schwert"
			},
			effect: {
				en: "If your opponent has any Pokémon VMAX in play, this attack does 150 more damage.",
				fr: "Si votre adversaire a au moins un Pokémon-VMAX en jeu, cette attaque inflige 150 dégâts supplémentaires.",
				es: "Si tu rival tiene algún Pokémon VMAX en juego, este ataque hace 150 puntos de daño más.",
				it: "Se il tuo avversario ha dei Pokémon-VMAX in gioco, questo attacco infligge 150 danni in più.",
				pt: "Se o seu oponente tiver algum Pokémon VMAX em jogo, este ataque causará 150 pontos de dano a mais.",
				de: "Wenn dein Gegner mindestens 1 Pokémon-VMAX im Spiel hat, fügt diese Attacke 150 Schadenspunkte mehr zu."
			},
			damage: "150+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
