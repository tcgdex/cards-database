import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Minccino",
		fr: "Chinchidou",
		es: "Minccino",
		it: "Minccino",
		pt: "Minccino",
		de: "Picochilla"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		572,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cleaning Up",
				fr: "Nettoyage",
				es: "Purgar",
				it: "Pulizie",
				pt: "Limpar",
				de: "Putzen"
			},
			effect: {
				en: "Discard a Pokémon Tool card attached to 1 of your opponent's Pokémon.",
				fr: "Défaussez une carte Outil Pokémon attachée à l'un des Pokémon de votre adversaire.",
				es: "Descarta 1 carta de Herramienta Pokémon unida a 1 de los Pokémon de tu rival.",
				it: "Scarta una carta Oggetto Pokémon assegnata a uno dei Pokémon del tuo avversario.",
				pt: "Descarte um card de Ferramenta Pokémon ligado a 1 Pokémon do seu oponente.",
				de: "Lege 1 an ein gegnerisches Pokémon angelegte Pokémon-Ausrüstung auf den Ablagestapel deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 289907,
		tcgplayer: 117859
	}
}

export default card
