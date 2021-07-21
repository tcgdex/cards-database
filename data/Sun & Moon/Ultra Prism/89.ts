import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Solgaleo ◇",
		fr: "Solgaleo ◇",
		es: "Solgaleo ◇",
		it: "Solgaleo ◇",
		pt: "Solgaleo ◇",
		de: "Solgaleo ◇"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		791,
	],
	hp: 160,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Radiant Star",
				fr: "Étoile Soleil Levant",
				es: "Estrella Sol Ascendente",
				it: "Stella del Sole Nascente",
				pt: "Estrela Radiante",
				de: "Aufgangsstern"
			},
			effect: {
				en: "For each of your opponent’s Pokémon in play, attach a Metal Energy card from your discard pile to your Pokémon in any way you like.",
				fr: "Pour chaque Pokémon de votre adversaire en jeu, attachez une carte Énergie Metal de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
				es: "Por cada uno de los Pokémon de tu rival en juego, une 1 carta de Energía Metal de tu pila de descartes a tus Pokémon de la manera que desees.",
				it: "Per ogni Pokémon del tuo avversario in gioco, assegna a piacimento ai tuoi Pokémon una carta Energia Metal dalla tua pila degli scarti.",
				pt: "Para cada Pokémon em jogo do seu oponente, ligue 1 carta de Energia Metal da sua pilha de descarte aos seus Pokémon como desejar.",
				de: "Lege für jedes Pokémon deines Gegners im Spiel 1 Metal-Energiekarte aus deinem Ablagestapel beliebig an deine Pokémon an."
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				en: "Corona Impact",
				fr: "Impact de Couronne",
				es: "Impacto Corona",
				it: "Impatto della Corona",
				pt: "Impacto Coronal",
				de: "Korona-Einschlag"
			},
			effect: {
				en: "This Pokémon can’t attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				es: "Este Pokémon no puede atacar durante tu próximo turno.",
				it: "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				pt: "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 160,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				fr: "Impact de Couronne",
			},
			effect: {
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
